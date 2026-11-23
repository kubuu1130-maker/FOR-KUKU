const https = require('https');
const fs = require('fs');

const val = 'CfDJ8LuuDkhhTGZDlT1wqGPfRzy7Wc4heSKauVKa5CAU_kMRdF97J6PIDbbxx5TLyOPCiCII1s-DEVECQFFWVXc02xo7kqCeS9XB1EGE40gohkti4CEIy1v0wh8R2JJpMETc6naTPCwPh6rqwHDQOvat2PaFTZ3Rilc0jcEIOE4xiUPEyHpzpkzTXYylSCt3zvb8k8YL3A9-d-IMqUqsxzWJIY9A0iz_qaR1E1wD-74mhKOAHIJ1hTtTFjW--DE2nEHgreL_isxZ78h9_1urZgxqucBt9fMlgC-6bDltbyttmwQe2kIBMVxe_PtL71O9LwdhUqU6ffFO42OKh6HYwmnO9kHgJQaEcFnkxv2tEfFDVbBZzfxE--dEg5QXwxcibr9ZJrlgaMRvorJDeTGRzsYHyzz7LvwsvivtpaLJpLHVxQAbGmMvNqAFFVkmgQmaL7BqRUj5PUBwcYg0bm5XCb4hjLmZeqNsnbktO096R_0wv8B5rREQSuH-i6EXN608iBjoNffb8XeRhnPLHPSiLyzXMq7T1jIUYjJs8tDk7eIrVirOv9R5sPjWR7ZmvPq609ks4LuqwBBpsZZa12L7rwdDeK1IC8cQZIGYTjxgpY5pqgEAWPvBssXzb8EJmv1AtAWL60cHih2cf16SNl-VCr_3CjahzZkJH6OLmPuBRlXp3h8x7IkdFqtqCnlsBEGdX8z82Q';

https.get('https://www.castudypartner.com/subject-selection', {
  headers: {
    'Cookie': '.AspNetCore.Cookies=' + val,
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    fs.writeFileSync('CA_INTER/subject_selection_live.html', d, 'utf8');
    const matches = [...d.matchAll(/href=["']([^"']+)["']/gi)].map(m => m[1]);
    console.log('Links:', [...new Set(matches)]);
    const forms = [...d.matchAll(/action=["']([^"']+)["']/gi)].map(m => m[1]);
    console.log('Forms:', forms);
    const scripts = [...d.matchAll(/<script[\s\S]*?<\/script>/gi)].map(m => m[0]);
    console.log('Scripts count:', scripts.length);
  });
});
