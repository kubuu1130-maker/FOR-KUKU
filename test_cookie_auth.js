const https = require('https');

// Combine cookies from user + response
const cookies = [
  '.AspNetCore.Cookies=CfDJ8LuuDkhhTGZDlT1wqGPfRzx7hAEt_Erve8OEanm_KIAFywbJgX-FSoZjdfxjhH4qu1w8FcUORcmf5R0MxVnQFMw3Q5Gq_ysTM7Ker3cPzLwVo4C9btC8RI7TvVXXB9Sbuif_KBCnk43LKRiGi9rmWJfst8WR20h_iwHnYKfRiQiOwkHn5J1EW7HcVU953CSyzzx7fC6PzC9pS3F0D2KE3s9lNgFDCn5nprWBHSlhNy0BFw6ldy6zaUgtiStW1sO51dKNR2craoUkMLE6RahZ74-VufG0C1dGaFdA50YdJjCscQ-X7zah2bZQL0aapYIhwkmvHqT9_4tO9iNpJkUYpGP9-5evMtE2pvwhSZchuMGps9UZJPl4fnQgwfa7PMz9z0DWiAVfeWiNUbaBeGhLKMXrr6kAJy2NqFUt8jyK0Rdwa7Dq-HytCM22YM-XydbS2bYJE7Cq9x5mSN0cNdDE7RoPpCvRJ4z3iZRZLa8hhqSxW2ox-w3Av3jArvCCco_iRIpPAwciymqKfOu_wlp9c2qlYEqNmMfHiO8TcuQtQx0mynNc54t87Km9KrKMe2-jwnRGuDhrBaw666oBWCojJzh-u6CwJuwaOgK_DXRLqjdZOR6cRksjZHWjlcwnt8sIlaY5O7K8S6DBHt1-alaI0W8PeaPVH29Q4PkoGu6QUjWL',
  'cf_clearance=CuO21OeNkF0HRspXRldmkFPUP_',
  'ai_intro_pending=1'
].join('; ');

const options = {
  hostname: 'www.castudypartner.com',
  port: 443,
  path: '/questions/de344fc709',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'Cookie': cookies,
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Referer': 'https://www.castudypartner.com/subject-selection'
  }
};

https.get(options, res => {
  console.log('Status:', res.statusCode);
  console.log('Location:', res.headers.location);
  console.log('Set-Cookie:', res.headers['set-cookie']);
  let b = '';
  res.on('data', c => b += c);
  res.on('end', () => {
    console.log('Body length:', b.length);
  });
});
