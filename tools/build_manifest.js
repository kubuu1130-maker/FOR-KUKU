const fs = require('fs'), path = require('path');
const D = path.join(__dirname, '..', 'data');
const papers = [1,2,3,4,5,6].map(n => {
  const f = path.join(D, `paper${n}.json`);
  if (!fs.existsSync(f)) throw new Error(`missing data/paper${n}.json`);
  return JSON.parse(fs.readFileSync(f, 'utf8'));
});

const manifest = {
  generated_at: new Date().toISOString(),
  totals: papers.map(p => ({ paper: p.paper, questions: p.questions.length })),
  gate: [],   // 36 = 6 per paper, verified deep
  entries: []
};

for (const p of papers) {
  p.questions.forEach(q => {
    const e = {
      paper: p.paper, position: q.position, original_id: q.original_id,
      source_url: q.source_url, flow: q.flow,
      expected: {
        tables: q.blocks.filter(b => b.type === 'table').length,
        cells: q.blocks.filter(b => b.type === 'table')
          .flatMap(b => (b.html.match(/<td|<th/g) || [])).length,
        mcqs: q.blocks.filter(b => b.type === 'mcq').length,
        subparts: q.blocks.filter(b => b.type === 'subpart').length,
        answer: q.blocks.some(b => b.type === 'answer' || (b.type === 'mcq' && b.answer))
      },
      needs_review: q.needs_review
    };
    manifest.entries.push(e);
    if (q.position <= 6) manifest.gate.push(e);
  });
}

if (manifest.gate.length !== 36) throw new Error(`gate != 36 (got ${manifest.gate.length})`);
fs.writeFileSync(path.join(__dirname, '..', 'manifest.json'), JSON.stringify(manifest, null, 1));
console.log('manifest.json OK — entries:', manifest.entries.length, 'gate:', manifest.gate.length);
