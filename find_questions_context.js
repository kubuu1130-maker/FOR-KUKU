const fs = require('fs');
const html = fs.readFileSync('CA_INTER/subject_selection.html', 'utf8');

// Find all occurrences of "questions"
let idx = 0;
while ((idx = html.indexOf('/questions/', idx)) !== -1) {
  const start = Math.max(0, idx - 100);
  const end = Math.min(html.length, idx + 250);
  console.log('--- FOUND AT ' + idx + ' ---');
  console.log(html.slice(start, end).replace(/\s+/g, ' '));
  idx += 11;
}
