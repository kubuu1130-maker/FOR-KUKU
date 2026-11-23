const fs = require('fs');
const p2 = JSON.parse(fs.readFileSync('CA_INTER/data/paper2_corporate_laws.json', 'utf8'));

console.log('Total questions in p2:', p2.questions.length);
console.log('Sample question in p2:', JSON.stringify(p2.questions[0], null, 2));
