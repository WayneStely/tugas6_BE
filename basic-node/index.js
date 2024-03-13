const http = require('http');

const server = http.createServer((ref, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('HAPPY BIRTHDAY BEV TUHAN YESUS BERKATI!');
    res.end();
}).listen(3000);