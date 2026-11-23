// node tools/node_fetch.js --url "https://www.castudypartner.com/questions/XXXX"
const COOKIE = '.AspNetCore.Cookies=CfDJ8LuuDkhhTGZDlT1wqGPfRzx7hAEt_Erve8OEanm_KIAFywbJgX-FSoZjdfxjhH4qu1w8FcUORcmf5R0MxVnQFMw3Q5Gq_ysTM7Ker3cPzLwVo4C9btC8RI7TvVXXB9Sbuif_KBCnk43LKRiGi9rmWJfst8WR20h_iwHnYKfRiQiOwkHn5J1EW7HcVU953CSyzzx7fC6PzC9pS3F0D2KE3s9lNgFDCn5nprWBHSlhNy0BFw6ldy6zaUgtiStW1sO51dKNR2craoUkMLE6RahZ74-VufG0C1dGaFdA50YdJjCscQ-X7zah2bZQL0aapYIhwkmvHqT9_4tO9iNpJkUYpGP9-5evMtE2pvwhSZchuMGps9UZJPl4fnQgwfa7PMz9z0DWiAVfeWiNUbaBeGhLKMXrr6kAJy2NqFUt8jyK0Rdwa7Dq-HytCM22YM-XydbS2bYJE7Cq9x5mSN0cNdDE7RoPpCvRJ4z3iZRZLa8hhqSxW2ox-w3Av3jArvCCco_iRIpPAwciymqKfOu_wlp9c2qlYEqNmMfHiO8TcuQtQx0mynNc54t87Km9KrKMe2-jwnRGuDhrBaw666oBWCojJzh-u6CwJuwaOgK_DXRLqjdZOR6cRksjZHWjlcwnt8sIlaY5O7K8S6DBHt1-alaI0W8PeaPVH29Q4PkoGu6QUjWL; .AspNetCore.Session=CfDJ8LuuDkhhTGZDlT1wqGPfRzzR...; cf_clearance=<paste>';
const url = process.argv[process.argv.indexOf('--url') + 1];
fetch(url, { headers: { cookie: COOKIE, 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } })
  .then(r => { console.error(r.status, r.headers.get('location') || ''); return r.text(); })
  .then(t => console.log(t));
// 200 = ok, 302 = cookie expired (console extractor use karo)
