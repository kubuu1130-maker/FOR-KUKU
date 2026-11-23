const fs = require('fs');
const app = fs.readFileSync('CA_INTER/app.js', 'utf8');

// Find activeQuestion modal
const idx = app.indexOf('activeQuestion &&');
if (idx !== -1) {
  console.log('Found activeQuestion modal at index', idx);
  console.log(app.slice(idx, idx + 1500));
} else {
  console.log('Not found activeQuestion &&');
}
