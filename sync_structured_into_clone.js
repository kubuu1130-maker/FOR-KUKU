const fs = require('fs');
const path = require('path');

// Load structured paper 1
const structuredP1 = JSON.parse(fs.readFileSync('CA_INTER/data/structured_questions/paper-1.json', 'utf8'));

// Convert structured questions to question bank format
const convertedP1 = structuredP1.map((sq, idx) => {
  // Extract text and table blocks
  let questionHtml = '';
  let answerHtml = '';

  sq.blocks.forEach(block => {
    if (block.type === 'text') {
      const pText = block.content.split('\n\n').map(p => `<p class="mb-3">${p.replace(/\n/g, '<br>')}</p>`).join('');
      questionHtml += pText;
    } else if (block.type === 'table') {
      questionHtml += block.html;
    } else if (block.type === 'answer') {
      const pAns = block.content.split('\n\n').map(p => `<p class="mb-3">${p.replace(/\n/g, '<br>')}</p>`).join('');
      answerHtml += pAns;
      if (block.table && block.table.html) {
        answerHtml += block.table.html;
      }
    }
  });

  return {
    id: `p1_core_${idx + 1}`,
    sn: idx + 1,
    category: "Subjective",
    type: "Subjective",
    topic: sq.topic,
    subTopic: sq.sub_topic,
    source: sq.source,
    year: sq.year,
    qNo: sq.title.replace('Question-', ''),
    marks: sq.marks,
    question: questionHtml,
    answer: answerHtml,
    options: [],
    correctOption: "",
    reason: "",
    structured_data: sq
  };
});

// Update paper1_advanced_accounting.json
const p1Path = 'CA_INTER/data/paper1_advanced_accounting.json';
const p1Db = JSON.parse(fs.readFileSync(p1Path, 'utf8'));

// Keep rest of questions from index 6 onwards
const remainingSubjs = p1Db.questions.filter(q => q.category === 'Subjective').slice(6).map((q, i) => ({
  ...q,
  sn: i + 7
}));
const mcqs = p1Db.questions.filter(q => q.category === 'MCQs');

p1Db.questions = [...convertedP1, ...remainingSubjs, ...mcqs];
p1Db.totalRecords = p1Db.questions.length;

fs.writeFileSync(p1Path, JSON.stringify(p1Db, null, 2), 'utf8');
console.log('Successfully updated paper1_advanced_accounting.json with structured questions!');

// Recompile embedded_data.js
const p2 = JSON.parse(fs.readFileSync('CA_INTER/data/paper2_corporate_laws.json', 'utf8'));
const p3 = JSON.parse(fs.readFileSync('CA_INTER/data/paper3_taxation.json', 'utf8'));
const p4 = JSON.parse(fs.readFileSync('CA_INTER/data/paper4_costing.json', 'utf8'));
const p5 = JSON.parse(fs.readFileSync('CA_INTER/data/paper5_audit.json', 'utf8'));
const p6 = JSON.parse(fs.readFileSync('CA_INTER/data/paper6_fmsm.json', 'utf8'));

const db = {
  subjects: {
    group1: [
      { id: 'paper-1', code: 'PAPER-1', name: 'Advanced Accounting', marks: 100, attempts: '11 Attempts', active: true, questionsCount: p1Db.questions.length },
      { id: 'paper-2', code: 'PAPER-2', name: 'Corporate and Other Laws', marks: 100, attempts: '8 Attempts + 50+ PYQs', active: true, questionsCount: p2.questions.length },
      { id: 'paper-3', code: 'PAPER-3', name: 'Taxation', marks: 100, attempts: '7 Attempts + 50+ PYQs', active: true, questionsCount: p3.questions.length }
    ],
    group2: [
      { id: 'paper-4', code: 'PAPER-4', name: 'Cost and Management Accounting', marks: 100, attempts: '18 Attempts', active: true, questionsCount: p4.questions.length },
      { id: 'paper-5', code: 'PAPER-5', name: 'Auditing and Ethics', marks: 100, attempts: '18 Attempts', active: true, questionsCount: p5.questions.length },
      { id: 'paper-6', code: 'PAPER-6', name: 'Financial Management and Strategic Management', marks: 100, attempts: '18 Attempts', active: true, questionsCount: p6.questions.length }
    ]
  },
  questionsBySubject: {
    'paper-1': p1Db,
    'paper-2': p2,
    'paper-3': p3,
    'paper-4': p4,
    'paper-5': p5,
    'paper-6': p6
  }
};

const jsContent = 'window.CA_INTER_DB = ' + JSON.stringify(db) + ';';
fs.writeFileSync('CA_INTER/data/embedded_data.js', jsContent, 'utf8');
console.log('Rebuilt embedded_data.js successfully!');
