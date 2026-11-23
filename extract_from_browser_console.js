/**
 * ⚡ 1-CLICK INSTANT CHROME DEVTOOLS EXTRACTOR FOR CA STUDY PARTNER ⚡
 * 
 * Instructions:
 * 1. Open Google Chrome on https://www.castudypartner.com/questions/...
 * 2. Press F12 (or right-click -> Inspect) to open DevTools.
 * 3. Go to the "Console" tab.
 * 4. Paste this entire code and press ENTER.
 * 5. It will instantly extract all questions and download a clean JSON file!
 */

(async function extractAllQuestionsFromBrowser() {
  console.log("%c[CA Study Partner Extractor] Starting extraction...", "color:#6366f1;font-weight:bold;font-size:14px;");
  
  // 1. Check if questions are stored in page memory
  let data = window.questions || window.questionList || window.tableData || null;

  // 2. If not in global variable, extract directly from the rendered table
  if (!data || !Array.isArray(data)) {
    const rows = document.querySelectorAll("table tbody tr, .question-row, [data-question-id]");
    console.log(`Found ${rows.length} rows in the current table.`);
    
    const extractedList = [];
    rows.forEach((row, idx) => {
      const cells = row.querySelectorAll("td");
      if (cells && cells.length >= 7) {
        extractedList.push({
          sn: cells[0]?.innerText?.trim() || (idx + 1),
          topic: cells[1]?.innerText?.trim() || "",
          subTopic: cells[2]?.innerText?.trim() || "-",
          source: cells[3]?.innerText?.trim() || "",
          year: cells[4]?.innerText?.trim() || "",
          qNo: cells[5]?.innerText?.trim() || "",
          marks: cells[6]?.innerText?.trim() || "",
          status: "unread"
        });
      }
    });

    data = extractedList;
  }

  // 3. Trigger direct JSON file download
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  const subjectName = document.querySelector(".subject-name, h1, h2")?.innerText?.trim() || "extracted_questions";
  a.download = `${subjectName.replace(/[^a-zA-Z0-9]/g, "_")}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  console.log("%c✓ Successfully extracted and downloaded data!", "color:#10b981;font-weight:bold;font-size:14px;");
})();
