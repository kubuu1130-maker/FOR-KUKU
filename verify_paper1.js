const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

console.log('================================================================');
console.log('  CA INTERMEDIATE PAPER-1 EXTRACTION & RENDER VERIFIER (6/6)');
console.log('================================================================\n');

// 1. Load manifest
const manifestPath = 'CA_INTER/manifest.json';
if (!fs.existsSync(manifestPath)) {
  console.error('FAIL: manifest.json not found!');
  process.exit(1);
}
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const p1Entries = manifest.entries.filter(e => e.paper === 'paper-1');

console.log(`Manifest loaded: Total entries = ${manifest.entries.length}, Paper-1 entries = ${p1Entries.length}`);

// 2. Load structured Paper 1
const p1DataPath = 'CA_INTER/data/structured_questions/paper-1.json';
if (!fs.existsSync(p1DataPath)) {
  console.error('FAIL: paper-1.json structured questions not found!');
  process.exit(1);
}
const p1Questions = JSON.parse(fs.readFileSync(p1DataPath, 'utf8'));

let passedCount = 0;
const results = [];

// Create screenshots directory
const screenshotsDir = 'CA_INTER/screenshots';
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

// 3. Verify each manifest entry
p1Entries.forEach((entry, idx) => {
  const q = p1Questions.find(item => item.position === entry.position);
  console.log(`\n------------------------------------------------------------`);
  console.log(`[TEST ${idx + 1}/6] Verifying Position ${entry.position}: ${entry.title} (${entry.topic})`);
  console.log(`------------------------------------------------------------`);

  const checks = [];

  // Check 1: Existence
  if (!q) {
    checks.push({ name: 'Question exists', pass: false, error: 'Question not found in structured data' });
  } else {
    checks.push({ name: 'Question exists', pass: true });

    // Check 2: Title and Topic match
    const titleMatch = q.title === entry.title;
    const topicMatch = q.topic === entry.topic;
    checks.push({ name: `Title matches (${entry.title})`, pass: titleMatch });
    checks.push({ name: `Topic matches (${entry.topic})`, pass: topicMatch });

    // Check 3: Sub-parts count
    const actualSubParts = q.meta?.sub_parts?.length || 0;
    const subPartsMatch = actualSubParts === entry.expected_sub_parts;
    checks.push({
      name: `Sub-parts count (${actualSubParts}/${entry.expected_sub_parts})`,
      pass: subPartsMatch,
      details: q.meta?.sub_parts
    });

    // Check 4: Tables count
    const actualTables = q.meta?.tables?.length || 0;
    const tablesMatch = actualTables === entry.expected_tables;
    checks.push({
      name: `Tables count (${actualTables}/${entry.expected_tables})`,
      pass: tablesMatch
    });

    // Check 5: Answer Block
    const ansBlock = q.blocks.find(b => b.type === 'answer');
    const hasAnswer = !!(ansBlock && ansBlock.content && ansBlock.content.length > 50);
    checks.push({ name: 'Answer block present and detailed', pass: hasAnswer });

    // Check 6: Specific regression assertions
    if (entry.regression_tag === 'AS_4_MEHTA_LTD') {
      const textBlock = q.blocks.find(b => b.type === 'text');
      const hasMehta = textBlock?.content?.includes('Mehta Ltd.');
      const hasSuit = textBlock?.content?.includes('25 lakhs');
      const hasTheft = textBlock?.content?.includes('5 lakhs');
      const hasFire = textBlock?.content?.includes('fire has damaged the assets');
      const as4Regression = hasMehta && hasSuit && hasTheft && hasFire;
      checks.push({
        name: 'AS 4 Regression Test (Mehta Ltd, Suit ₹25L, Theft ₹5L, Fire insured)',
        pass: as4Regression
      });
    }

    if (entry.regression_tag === 'AS_21_MINORITY_INTEREST_GRID') {
      const tblBlock = q.blocks.find(b => b.type === 'table');
      const hasCaseI = tblBlock?.html?.includes('Case-i') && tblBlock?.html?.includes('1,85,000');
      const hasCaseII = tblBlock?.html?.includes('Case-ii') && tblBlock?.html?.includes('1,60,000');
      const hasCaseIV = tblBlock?.html?.includes('Case-iv') && tblBlock?.html?.includes('40,000');
      const hasRowspanColspan = tblBlock?.html?.includes('rowspan="3"') && tblBlock?.html?.includes('colspan="2"');
      const gridValid = hasCaseI && hasCaseII && hasCaseIV && hasRowspanColspan;
      checks.push({
        name: 'AS 21 Minority Interest Grid (Case-i to iv, Rowspan 3, Colspan 2, Exact amounts)',
        pass: gridValid
      });
    }

    if (entry.regression_tag === 'AS_13_INVESTMENT_LEDGER') {
      const ansBlock = q.blocks.find(b => b.type === 'answer');
      const hasLedger = ansBlock?.table?.html?.includes('12% Government Bonds Account') && ansBlock?.table?.html?.includes('1,84,753');
      checks.push({
        name: 'AS 13 Investment Ledger Table (Date, Particulars, Nominal, Interest, Cost)',
        pass: !!hasLedger
      });
    }

    if (entry.regression_tag === 'AS_19_LEASE_PV_TABLE') {
      const qTbl = q.blocks.find(b => b.type === 'table');
      const hasPVF = qTbl?.html?.includes('0.8696') && qTbl?.html?.includes('0.4972');
      const ansTbl = q.blocks.find(b => b.type === 'answer')?.table;
      const hasUnearned = ansTbl?.html?.includes('5,94,900');
      checks.push({
        name: 'AS 19 Finance Lease PV Factors & Unearned Income Table',
        pass: !!(hasPVF && hasUnearned)
      });
    }
  }

  const allPassed = checks.every(c => c.pass);
  checks.forEach(c => {
    console.log(`  ${c.pass ? '✓ PASS' : '✗ FAIL'}: ${c.name}`);
  });

  if (allPassed) {
    passedCount++;
    console.log(`>>> Position ${entry.position} (${entry.title}): STATUS VERIFIED [PASS]`);
  } else {
    console.log(`>>> Position ${entry.position} (${entry.title}): STATUS FAILED [FAIL]`);
  }

  results.push({ position: entry.position, title: entry.title, topic: entry.topic, pass: allPassed });
});

// 4. Capture Clone Screenshots via Headless Chrome
console.log('\n================================================================');
console.log('  CAPTURING CLONE SCREENSHOTS VIA HEADLESS CHROME');
console.log('================================================================');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

function captureCloneQuestion(qIdx, filename) {
  try {
    let appCode = fs.readFileSync('CA_INTER/app.js', 'utf8');
    const targetSetState = "const [activeQuestion, setActiveQuestion] = useState(null);";
    const replaceSetState = `const [activeQuestion, setActiveQuestion] = useState(DB.questionsBySubject && DB.questionsBySubject['paper-1'] ? DB.questionsBySubject['paper-1'].questions[${qIdx}] : null);`;

    fs.writeFileSync('CA_INTER/app.js', appCode.replace(targetSetState, replaceSetState), 'utf8');

    const outPath = path.resolve(screenshotsDir, filename);
    execFileSync(chromePath, [
      '--headless=new',
      '--user-data-dir=C:\\Users\\prash\\AppData\\Local\\Temp\\chrome_verify_p1',
      `--screenshot=${outPath}`,
      '--window-size=1400,900',
      'http://localhost:3000'
    ]);

    // Restore app.js
    fs.writeFileSync('CA_INTER/app.js', appCode, 'utf8');
    console.log(`✓ Screenshot captured: ${filename} (${fs.statSync(outPath).size} bytes)`);
  } catch (err) {
    console.error(`Error capturing screenshot for index ${qIdx}:`, err.message);
  }
}

captureCloneQuestion(0, 'clone_q1a_as4_mehta.png');
captureCloneQuestion(1, 'clone_q1b_as21_minority_grid.png');

console.log('\n================================================================');
console.log(`  VERIFICATION SUMMARY: ${passedCount}/6 PASSED`);
console.log('================================================================');

results.forEach(r => {
  console.log(`  Position ${r.position} | ${r.title.padEnd(16)} | ${r.topic.padEnd(45)} | ${r.pass ? 'PASS ✓' : 'FAIL ✗'}`);
});

if (passedCount === 6) {
  console.log('\n>>> SUCCESS: ALL 6/6 PAPER-1 QUESTIONS VERIFIED & CONFIRMED!\n');
  process.exit(0);
} else {
  console.error(`\n>>> FAILURE: ONLY ${passedCount}/6 PASSED!\n`);
  process.exit(1);
}
