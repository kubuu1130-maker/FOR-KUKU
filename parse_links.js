const fs = require('fs');
const html = fs.readFileSync('CA_INTER/subject_selection.html', 'utf8');

const regex = /<a[^>]*href=["'](\/questions\/[^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log('--- LINK:', m[1], '---');
  const text = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log('TEXT:', text);
}
