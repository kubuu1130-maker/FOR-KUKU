/* eslint-disable */
/**
 * ============================================================================
 * CA Study Partner — Automated In-Tab Question Extractor (200 Subj + 200 MCQs)
 * ============================================================================
 * 
 * HOW TO RUN:
 * 1. Open Chrome, go to https://www.castudypartner.com/questions/...
 *    (Ensure you are logged in and the questions table is visible)
 * 2. Press F12 -> Go to "Console" tab.
 * 3. Copy-paste this entire script into the Console and press Enter.
 * 4. Run:
 *        await extractFullPaper(1);
 *    (For Paper 2 run `await extractFullPaper(2)`, etc.)
 * 
 * FEATURES:
 * - Operates inside your existing authenticated session: ZERO login / 302 redirect issues!
 * - Automatically scrapes 200 Subjective questions.
 * - Automatically clicks the [MCQs] tab and scrapes 200 MCQ questions.
 * - Captures tables, subparts, answer text, and MCQ options.
 * - Auto-downloads `paper${paperNo}_full_400.json`.
 */

window.extractFullPaper = async function (paperNo, targetPerCategory = 200) {
  const CFG = {
    delay: 950,
    settle: 850,
    modal: '[role="dialog"], .modal-dialog, .modal.show, .modal, #questionModal, .question-modal',
    close: '[aria-label="Close"], .btn-close, button.close, .close',
    reveal: 'button, .btn, [role="button"]'
  };

  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const log = (...a) => console.log('%c[FullExtractor]', 'color:#6c5ce7;font-weight:bold', ...a);

  const visible = el => el && el.offsetParent !== null;

  function findRows() {
    const all = [...document.querySelectorAll('table tbody tr')];
    return all.filter(tr =>
      visible(tr) && !tr.querySelector('th') &&
      (tr.querySelector('a[href*="question"], button, [data-id], [onclick]') || tr.children.length >= 4)
    );
  }

  function findModal() {
    return [...document.querySelectorAll(CFG.modal)].find(visible) || null;
  }

  function cleanTable(tbl) {
    const c = tbl.cloneNode(true);
    c.querySelectorAll('script,style,noscript').forEach(n => n.remove());
    c.querySelectorAll('*').forEach(n => {
      [...n.attributes].forEach(a => {
        if (!['colspan', 'rowspan', 'scope'].includes(a.name.toLowerCase())) n.removeAttribute(a.name);
      });
    });
    return c.outerHTML;
  }

  function tableToRows(tbl) {
    return [...tbl.rows].map(r => [...r.cells].map(c => ({
      text: c.innerText.trim(), colspan: c.colSpan, rowspan: c.rowSpan
    })));
  }

  function classify(t) {
    if (/^answer/i.test(t)) return 'answer';
    if (/^(option\s*)?[A-D][\).:-]\s/i.test(t)) return 'option';
    if (/^\(?[ivx]+\)|^\(?\d+[\).]\s/.test(t)) return 'subpart';
    return 'text';
  }

  function parseBlocks(root) {
    const blocks = [];
    const meta = root.querySelector('table');
    if (meta) blocks.push({ type: 'meta', rows: tableToRows(meta) });

    const walk = el => {
      for (const ch of el.children) {
        if (ch.matches('script,style,noscript')) continue;
        if (ch === meta) continue;
        if (ch.matches('button, a.btn, [role="button"], nav, .modal-footer, .notes')) continue;
        if (ch.matches('table')) { blocks.push({ type: 'table', html: cleanTable(ch) }); continue; }
        if (ch.matches('img')) {
          blocks.push({ type: 'image', src: ch.currentSrc || ch.src, alt: ch.alt || '' }); continue;
        }
        if (!ch.querySelector('table,img,p,div,li,ul,ol')) {
          const t = ch.innerText.trim();
          if (t) blocks.push({ type: classify(t), text: t });
        } else walk(ch);
      }
    };
    walk(root);
    return groupMcq(blocks);
  }

  function groupMcq(blocks) {
    const out = [];
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].type !== 'option') { out.push(blocks[i]); continue; }
      const opts = [];
      while (i < blocks.length && blocks[i].type === 'option') opts.push(blocks[i++].text);
      i--;
      const ans = [];
      let j = i + 1;
      while (j < blocks.length && blocks[j].type === 'answer') ans.push(blocks[j++].text);
      i = j - 1;
      out.push({ type: 'mcq', options: opts, answer: ans.join('\n') || null });
    }
    return out;
  }

  async function captureRow(row, position, category) {
    const prev = findModal();
    row.click();
    await sleep(CFG.settle);
    const modal = findModal();
    const flow = ['open:row'];

    if (modal && modal !== prev) {
      flow.push('modal:open');
      const both = [...modal.querySelectorAll(CFG.reveal)]
        .find(b => /^\s*(both|show answer|answer)\s*$/i.test(b.innerText));
      if (both) {
        both.click();
        flow.push('toggle:' + both.innerText.trim());
        await sleep(CFG.settle);
      }
      flow.push('capture');

      const q = {
        paper: paperNo,
        position,
        category,
        original_id: row.dataset.id || row.getAttribute('data-id') || null,
        source_url: location.href,
        flow,
        blocks: parseBlocks(modal),
        dom: modal.outerHTML
      };

      (modal.querySelector(CFG.close) || { click() {} }).click();
      await sleep(250);
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      await sleep(250);
      return q;
    }

    // Fallback row format
    return {
      paper: paperNo,
      position,
      category,
      original_id: null,
      source_url: location.href,
      flow: ['direct:row'],
      blocks: [{ type: 'text', text: row.innerText.trim() }],
      dom: row.outerHTML
    };
  }

  async function switchTab(tabName) {
    log(`Switching to [${tabName}] tab...`);
    const tabs = [...document.querySelectorAll('button, a, .tab, .pill')];
    const target = tabs.find(t => new RegExp(`^\\s*${tabName}\\s*$`, 'i').test(t.innerText));
    if (target) {
      target.click();
      await sleep(1500);
      return true;
    }
    log(`Warning: Tab [${tabName}] not found directly.`);
    return false;
  }

  async function scrapeCategory(categoryName, targetCount) {
    log(`Starting extraction for category: ${categoryName} (Target: ${targetCount})`);
    await switchTab(categoryName);
    const results = [];
    let seen = 0;

    while (results.length < targetCount) {
      const rows = findRows();
      if (!rows.length) break;

      for (let i = 0; i < rows.length && results.length < targetCount; i++) {
        const cur = findRows()[i];
        if (!cur) break;
        seen++;
        log(`${categoryName}: item ${seen} / ${targetCount}`);
        const q = await captureRow(cur, results.length + 1, categoryName);
        results.push(q);
        await sleep(CFG.delay);
      }

      // Check next page if needed
      if (results.length < targetCount) {
        const next = [...document.querySelectorAll('button, a')]
          .find(b => /next\s*\d*\s*[↓➡]/i.test(b.innerText) && visible(b));
        if (!next) break;
        log('Paginating to next set of 200 records...');
        next.click();
        await sleep(2000);
      }
    }
    return results;
  }

  // Phase 1: 200 Subjective Questions
  const subjectiveQuestions = await scrapeCategory('Subjective', targetPerCategory);
  log(`✓ Extracted ${subjectiveQuestions.length} Subjective questions.`);

  // Phase 2: 200 MCQ Questions
  const mcqQuestions = await scrapeCategory('MCQs', targetPerCategory);
  log(`✓ Extracted ${mcqQuestions.length} MCQ questions.`);

  const allQuestions = [...subjectiveQuestions, ...mcqQuestions];
  const payload = {
    paper: paperNo,
    subject: document.querySelector('h1, h2, .subject-title')?.innerText?.trim() || `Paper ${paperNo}`,
    extracted_at: new Date().toISOString(),
    totalSubjective: subjectiveQuestions.length,
    totalMcqs: mcqQuestions.length,
    total: allQuestions.length,
    questions: allQuestions
  };

  // Download JSON
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }));
  a.download = `paper${paperNo}_full_400.json`;
  a.click();
  log(`🎉 DONE! Saved ${payload.total} records -> ${a.download}`);
  return payload;
};

// Aliases for user convenience
window.extractPaper = (no) => window.extractFullPaper(no, 200);
