const https = require('https');
const fs = require('fs');

let cookie = '.AspNetCore.Cookies=CfDJ8LuuDkhhTGZDlT1wqGPfRzx7hAEt_Erve8OEanm_KIAFywbJgX-FSoZjdfxjhH4qu1w8FcUORcmf5R0MxVnQFMw3Q5Gq_ysTM7Ker3cPzLwVo4C9btC8RI7TvVXXB9Sbuif_KBCnk43LKRiGi9rmWJfst8WR20h_iwHnYKfRiQiOwkHn5J1EW7HcVU953CSyzzx7fC6PzC9pS3F0D2KE3s9lNgFDCn5nprWBHSlhNy0BFw6ldy6zaUgtiStW1sO51dKNR2craoUkMLE6RahZ74-VufG0C1dGaFdA50YdJjCscQ-X7zah2bZQL0aapYIhwkmvHqT9_4tO9iNpJkUYpGP9-5evMtE2pvwhSZchuMGps9UZJPl4fnQgwfa7PMz9z0DWiAVfeWiNUbaBeGhLKMXrr6kAJy2NqFUt8jyK0Rdwa7Dq-HytCM22YM-XydbS2bYJE7Cq9x5mSN0cNdDE7RoPpCvRJ4z3iZRZLa8hhqSxW2ox-w3Av3jArvCCco_iRIpPAwciymqKfOu_wlp9c2qlYEqNmMfHiO8TcuQtQx0mynNc54t87Km9KrKMe2-jwnRGuDhrBaw666oBWCojJzh-u6CwJuwaOgK_DXRLqjdZOR6cRksjZHWjlcwnt8sIlaY5O7K8S6DBHt1-alaI0W8PeaPVH29Q4PkoGu6QUjWL; cf_clearance=CuO21OeNkF0HRspXRldmkFPUP_';

function testPath(p) {
  const options = {
    hostname: 'www.castudypartner.com',
    port: 443,
    path: p,
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
      'Cookie': cookie,
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
    }
  };

  https.get(options, res => {
    console.log(p, 'Status:', res.statusCode, 'Location:', res.headers.location);
    let body = '';
    res.on('data', d => body += d);
    res.on('end', () => {
      console.log(p, 'Bytes:', body.length);
      if (body.length > 0) {
        fs.writeFileSync('CA_INTER/' + p.replace(/\//g, '_') + '.html', body, 'utf8');
        console.log(p, 'Saved HTML! Snippet:', body.slice(0, 300).replace(/\s+/g, ' '));
      }
    });
  });
}

testPath('/questions/de344fc709');
testPath('/questions/42428b06ff');
testPath('/questions/b5d4c3755a');
