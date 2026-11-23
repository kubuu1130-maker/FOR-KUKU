const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const dataDir = path.join(rootDir, 'data');

const paperFiles = [
  { no: 1, id: 'paper-1', file: 'paper1_advanced_accounting.json', name: 'Advanced Accounting' },
  { no: 2, id: 'paper-2', file: 'paper2_corporate_laws.json', name: 'Corporate and Other Laws' },
  { no: 3, id: 'paper-3', file: 'paper3_taxation.json', name: 'Taxation' },
  { no: 4, id: 'paper-4', file: 'paper4_costing.json', name: 'Cost and Management Accounting' },
  { no: 5, id: 'paper-5', file: 'paper5_audit.json', name: 'Auditing and Ethics' },
  { no: 6, id: 'paper-6', file: 'paper6_fmsm.json', name: 'Financial Management and Strategic Management' }
];

const questionsBySubject = {};

for (const info of paperFiles) {
  const srcPath = path.join(dataDir, `paper${info.no}.json`);
  const rawData = JSON.parse(fs.readFileSync(srcPath, 'utf8'));

  const destPath = path.join(dataDir, info.file);
  let existingDb = { subject: info.name, totalRecords: 0, questions: [] };
  if (fs.existsSync(destPath)) {
    existingDb = JSON.parse(fs.readFileSync(destPath, 'utf8'));
  }

  // Convert rawData.questions
  const convertedQuestions = rawData.questions.map((q, idx) => {
    let questionHtml = '';
    let answerHtml = '';

    q.blocks.forEach(b => {
      if (b.type === 'text') {
        const pText = b.text.split('\n\n').map(p => `<p class="mb-3">${p.replace(/\n/g, '<br>')}</p>`).join('');
        questionHtml += pText;
      } else if (b.type === 'table') {
        questionHtml += b.html;
      } else if (b.type === 'subpart') {
        questionHtml += `<p class="mb-2 pl-4 text-gray-700 font-medium">${b.text}</p>`;
      } else if (b.type === 'answer') {
        const pAns = b.text.split('\n\n').map(p => `<p class="mb-3">${p.replace(/\n/g, '<br>')}</p>`).join('');
        answerHtml += pAns;
      }
    });

    const topicName = q.blocks.find(b => b.text && b.text.includes('AS')) ? 
      (q.blocks.find(b => b.text.includes('AS 4')) ? 'AS 4' : 
       q.blocks.find(b => b.text.includes('AS 21')) ? 'AS 21' : 
       q.blocks.find(b => b.text.includes('AS 13')) ? 'AS 13' : 
       q.blocks.find(b => b.text.includes('AS 19')) ? 'AS 19' : 
       q.blocks.find(b => b.text.includes('AS 12')) ? 'AS 12' : 'Accounting Standards') : 'Statutory Provisions';

    return {
      id: `p${info.no}_q_${q.position}`,
      sn: q.position,
      category: "Subjective",
      type: "Subjective",
      topic: topicName,
      subTopic: `Question-${q.position}`,
      source: "MTP-01",
      year: "JAN, 2027",
      qNo: `1(${String.fromCharCode(96 + q.position)})`,
      marks: "7",
      question: questionHtml,
      answer: answerHtml,
      options: [],
      correctOption: "",
      reason: "",
      structured_data: q
    };
  });

  // Preserve remaining questions from index 6 onwards if any
  const remaining = (existingDb.questions || []).filter(q => q.category === 'Subjective').slice(6).map((q, i) => ({
    ...q,
    sn: i + 7
  }));
  const mcqs = (existingDb.questions || []).filter(q => q.category === 'MCQs');

  existingDb.questions = [...convertedQuestions, ...remaining, ...mcqs];
  existingDb.totalRecords = existingDb.questions.length;

  fs.writeFileSync(destPath, JSON.stringify(existingDb, null, 2), 'utf8');
  questionsBySubject[info.id] = existingDb;
  console.log(`Updated ${info.file} with ${existingDb.questions.length} total records (${convertedQuestions.length} core structured questions).`);
}

// Rebuild embedded_data.js
const masterDb = {
  subjects: {
    group1: [
      { id: 'paper-1', code: 'PAPER-1', name: 'Advanced Accounting', marks: 100, attempts: '11 Attempts', active: true, questionsCount: questionsBySubject['paper-1'].questions.length },
      { id: 'paper-2', code: 'PAPER-2', name: 'Corporate and Other Laws', marks: 100, attempts: '8 Attempts + 50+ PYQs', active: true, questionsCount: questionsBySubject['paper-2'].questions.length },
      { id: 'paper-3', code: 'PAPER-3', name: 'Taxation', marks: 100, attempts: '7 Attempts + 50+ PYQs', active: true, questionsCount: questionsBySubject['paper-3'].questions.length }
    ],
    group2: [
      { id: 'paper-4', code: 'PAPER-4', name: 'Cost and Management Accounting', marks: 100, attempts: '18 Attempts', active: true, questionsCount: questionsBySubject['paper-4'].questions.length },
      { id: 'paper-5', code: 'PAPER-5', name: 'Auditing and Ethics', marks: 100, attempts: '18 Attempts', active: true, questionsCount: questionsBySubject['paper-5'].questions.length },
      { id: 'paper-6', code: 'PAPER-6', name: 'Financial Management and Strategic Management', marks: 100, attempts: '18 Attempts', active: true, questionsCount: questionsBySubject['paper-6'].questions.length }
    ]
  },
  questionsBySubject
};

const jsContent = 'window.CA_INTER_DB = ' + JSON.stringify(masterDb) + ';';
fs.writeFileSync(path.join(dataDir, 'embedded_data.js'), jsContent, 'utf8');
console.log('Rebuilt embedded_data.js successfully! Total size:', (jsContent.length / 1024).toFixed(1), 'KB');
