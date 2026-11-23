const fs = require('fs');
const app = fs.readFileSync('CA_INTER/app.js', 'utf8');

const idx = app.indexOf('activeQuestion &&');
console.log(app.slice(idx + 8500, idx + 13000));
