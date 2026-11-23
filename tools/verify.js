const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const man = JSON.parse(fs.readFileSync(path.join(ROOT, 'manifest.json'), 'utf8'));
const GATE = process.argv.includes('--gate');
const list = GATE ? man.gate : man.entries;
const data = {};
const getQ = e => {
  data[e.paper] ??= JSON.parse(fs.readFileSync(path.join(ROOT, 'data', `paper${e.paper}.json`), 'utf8'));
  return data[e.paper].questions.find(q => q.position === e.position);
};

let fail = 0;
const per = {};
for (const e of list) {
  const tag = `P${e.paper} #${e.position}`;
  const errs = [];
  const q = getQ(e);
  if (!q) errs.push('question missing');
  else {
    const tables = q.blocks.filter(b => b.type === 'table');
    const cells = tables.flatMap(b => (b.html.match(/<td|<th/g) || [])).length;
    const mcqs = q.blocks.filter(b => b.type === 'mcq');
    const txt = q.blocks.filter(b => b.text).map(b => b.text).join(' ');
    if (txt.trim().length < 40) errs.push('text too short');
    if (tables.length !== e.expected.tables) errs.push(`tables ${tables.length}!=${e.expected.tables}`);
    if (cells !== e.expected.cells) errs.push(`cells ${cells}!=${e.expected.cells}`);
    if (mcqs.length !== e.expected.mcqs) errs.push(`mcqs ${mcqs.length}!=${e.expected.mcqs}`);
    if (mcqs.some(m => m.options.length !== 4)) errs.push('mcq options != 4');
    if (e.expected.answer && !q.blocks.some(b => b.type === 'answer' || (b.type === 'mcq' && b.answer)))
      errs.push('answer missing');
    if (!q.flow || q.flow.length < 3) errs.push('flow not captured');
    if (!/^https?:/.test(q.source_url || '')) errs.push('source_url missing');
  }
  per[e.paper] ??= { ok: 0, bad: 0 };
  if (errs.length) { per[e.paper].bad++; fail++; console.log('FAIL', tag, '-', errs.join('; ')); }
  else { per[e.paper].ok++; console.log('PASS', tag); }
}

// AS 4 regression
const as4 = man.entries.find(e => e.paper === 1 && e.position === 1);
const q1 = as4 && getQ(as4);
const as4ok = q1 &&
  /AS[\s-]?4|Contingenc/i.test(q1.blocks.map(b => b.text).join(' ')) &&
  /Mehta\s+Ltd/i.test(q1.dom || '') &&
  q1.blocks.some(b => b.type === 'table') &&
  q1.blocks.some(b => b.type === 'answer');
console.log(as4ok ? 'PASS AS4 regression' : 'FAIL AS4 regression');
if (!as4ok) fail++;

console.log('\n--- SCORE ---');
for (const p of [1,2,3,4,5,6]) {
  const s = per[p] || { ok: 0, bad: 0 };
  console.log(`Paper ${p}: ${s.ok}/${s.ok + s.bad} ${s.bad === 0 && s.ok >= (GATE ? 6 : 1) ? 'OK' : 'INCOMPLETE'}`);
}
console.log(fail === 0 ? '\nVERDICT: 6/6 PASS' : `\nVERDICT: ${fail} failures`);
process.exit(fail ? 1 : 0);
