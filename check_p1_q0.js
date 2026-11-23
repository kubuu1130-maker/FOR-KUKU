const fs = require('fs');
const p1 = JSON.parse(fs.readFileSync('CA_INTER/data/paper1_advanced_accounting.json', 'utf8'));

console.log('Total questions in p1:', p1.questions.length);
console.log('First question in p1:', JSON.stringify(p1.questions[0], null, 2));
