const fs = require('fs');
const html = fs.readFileSync('CA_INTER/subject_selection.html', 'utf8');

// Find all script tags
const scriptRegex = /<script[\s\S]*?<\/script>/gi;
let m;
while ((m = scriptRegex.exec(html)) !== null) {
  console.log('=== SCRIPT ===');
  console.log(m[0].slice(0, 300));
}
