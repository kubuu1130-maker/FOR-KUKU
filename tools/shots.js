const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const shotsDir = path.join(ROOT, 'shots');
if (!fs.existsSync(shotsDir)) {
  fs.mkdirSync(shotsDir, { recursive: true });
}

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
if (!fs.existsSync(chromePath)) {
  console.log('Chrome not found at', chromePath);
  process.exit(0);
}

const man = JSON.parse(fs.readFileSync(path.join(ROOT, 'manifest.json'), 'utf8'));
const gateEntries = man.gate || [];

console.log(`Generating screenshots for ${gateEntries.length} gate questions...`);

function captureQuestion(paperNo, qPos, filename) {
  try {
    const appPath = path.join(ROOT, 'app.js');
    let appCode = fs.readFileSync(appPath, 'utf8');
    const targetSetState = "const [activeQuestion, setActiveQuestion] = useState(null);";
    const replaceSetState = `const [activeQuestion, setActiveQuestion] = useState(DB.questionsBySubject && DB.questionsBySubject['paper-${paperNo}'] ? DB.questionsBySubject['paper-${paperNo}'].questions[${qPos - 1}] : null);`;

    fs.writeFileSync(appPath, appCode.replace(targetSetState, replaceSetState), 'utf8');

    const outPath = path.join(shotsDir, filename);
    execFileSync(chromePath, [
      '--headless=new',
      '--user-data-dir=C:\\Users\\prash\\AppData\\Local\\Temp\\chrome_shots_tmp',
      `--screenshot=${outPath}`,
      '--window-size=1400,900',
      'http://localhost:3000'
    ]);

    fs.writeFileSync(appPath, appCode, 'utf8');
    if (fs.existsSync(outPath)) {
      console.log(`✓ Shot: ${filename} (${fs.statSync(outPath).size} bytes)`);
    }
  } catch (e) {
    console.error(`Failed ${filename}:`, e.message);
  }
}

// Capture representative shots for Gate entries of Paper 1 and Paper 2
captureQuestion(1, 1, 'P1-01-clone.png');
captureQuestion(1, 2, 'P1-02-clone.png');
captureQuestion(2, 1, 'P2-01-clone.png');

console.log('Shots capture completed!');
