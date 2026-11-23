const fs = require('fs');
let code = fs.readFileSync('CA_INTER/app.js', 'utf8');

// Replace the subjective rendering block so that Both shows Question and Answer directly without "Show Solution" button
const targetBlock = `  /* ── SUBJECTIVE QUESTION & ANSWER (Matching edkam_007.jpg) ── */
  React.createElement("div", {
    className: "space-y-5 pt-2"
  }, (modalMode === 'Both' || modalMode === 'Question') && /*#__PURE__*/React.createElement("div", {
    className: "text-xs sm:text-sm text-slate-800 leading-relaxed font-normal"
  }, /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: activeQuestion.question
    }
  })), modalMode === 'Both' && /*#__PURE__*/React.createElement("div", {
    className: "pt-1"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowAnswer(!showAnswer),
    className: "px-5 py-2 bg-[#5a4bd6] hover:bg-[#4a3cb8] text-white rounded-full text-xs font-bold transition cursor-pointer shadow-sm"
  }, showAnswer ? 'Hide Solution' : 'Show Solution')), (modalMode === 'Answer' || modalMode === 'Both' && showAnswer) && /*#__PURE__*/React.createElement("div", {
    className: "pt-2 border-t border-slate-200 space-y-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-base font-black text-[#14183a] underline underline-offset-4 decoration-2"
  }, "Answer-", activeQuestion.qNo), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-800 leading-relaxed space-y-3 font-normal",
    dangerouslySetInnerHTML: {
      __html: activeQuestion.answer
    }
  })))`;

const replacementBlock = `  /* ── SUBJECTIVE QUESTION & ANSWER (Exact castudypartner.com layout) ── */
  React.createElement("div", {
    className: "space-y-6 pt-2"
  }, (modalMode === 'Both' || modalMode === 'Question') && /*#__PURE__*/React.createElement("div", {
    className: "text-xs sm:text-sm text-slate-800 leading-relaxed font-normal space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: activeQuestion.question
    }
  })), (modalMode === 'Both' || modalMode === 'Answer') && /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t border-slate-200 space-y-3"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-base font-black text-[#14183a] underline underline-offset-4 decoration-2"
  }, "Answer-", activeQuestion.qNo), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-800 leading-relaxed space-y-3 font-normal",
    dangerouslySetInnerHTML: {
      __html: activeQuestion.answer
    }
  })))`;

if (code.includes(targetBlock)) {
  code = code.replace(targetBlock, replacementBlock);
  fs.writeFileSync('CA_INTER/app.js', code, 'utf8');
  console.log('Successfully updated subjective modal layout in app.js!');
} else {
  console.log('Target block not found, check snippet');
}
