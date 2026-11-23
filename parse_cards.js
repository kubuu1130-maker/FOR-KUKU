const fs = require('fs');
const html = fs.readFileSync('CA_INTER/subject_selection.html', 'utf8');

const regex = /<div class="subject-card[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi;
let m;
let count = 0;
while ((m = regex.exec(html)) !== null && count < 6) {
  console.log('--- CARD ' + (++count) + ' ---');
  console.log(m[0].replace(/\s+/g, ' ').slice(0, 400));
}
