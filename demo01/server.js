let http = require('http');
let url = require('url')

let server = http.createServer((req, res) => {
  let { pathname, query } = url.parse(req.url);
  let method = req.method.toLowerCase();
  let arr = [];
  req.on('data', (chunk) => {
    arr.push(chunk)
  });
  req.end('on', () => {
    let str = Buffer.concat(arr).toString();
    console.log(str);
    res.end()
  })
})

server.listen(8080, () => {
  console.log('server start')
})
