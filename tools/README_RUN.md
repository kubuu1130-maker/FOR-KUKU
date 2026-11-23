# Extraction pipeline — run order

Original site par logged-in tab kholo, paper ki table visible ho, F12 → Console.
Har paper ke liye:
    await extractPaper(1)   ... await extractPaper(6)
(200 rows per page hain; script khud pagination karti hai, ~1 req/sec)

Phir local se:
    node tools/build_manifest.js
    node tools/verify.js --gate          # 6/6 per paper chahiye
    node tools/verify.js --all           # poora 767+ per paper

Rules enforced in code:
- table kabhi text nahi banti -> rows/cols + colspan/rowspan HTML
- flow array = actual click sequence
- jo confirm nahi hua -> needs_review + reason, skip nahi
