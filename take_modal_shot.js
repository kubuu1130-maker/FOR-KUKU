const fs = require('fs');
let code = fs.readFileSync('CA_INTER/app.js', 'utf8');

const originalLine = "const [activeQuestion, setActiveQuestion] = useState(null);";
const testLine = "const [activeQuestion, setActiveQuestion] = useState(DB.questionsBySubject && DB.questionsBySubject['paper-1'] ? DB.questionsBySubject['paper-1'].questions[0] : null);";

fs.writeFileSync('CA_INTER/app.js', code.replace(originalLine, testLine), 'utf8');

const { execFileSync } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
execFileSync(chromePath, [
  '--headless=new',
  '--user-data-dir=C:\\Users\\prash\\AppData\\Local\\Temp\\chrome_shot_modal',
  '--screenshot=C:\\Users\\prash\\OneDrive\\Desktop\\AntiGravity\\CA_INTER\\modal_preview.png',
  '--window-size=1400,900',
  'http://localhost:3000'
]);

// Revert app.js back to null
fs.writeFileSync('CA_INTER/app.js', code, 'utf8');
console.log('Modal screenshot taken, size:', fs.statSync('CA_INTER/modal_preview.png').size);
