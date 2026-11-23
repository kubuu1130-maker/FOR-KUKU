const fs = require('fs');
const app = fs.readFileSync('CA_INTER/app.js', 'utf8');

const idx = app.indexOf('activeQuestion &&');
console.log(app.slice(idx + 4500, idx + 8500));
