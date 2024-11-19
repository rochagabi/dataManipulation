const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5501;

http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'doc.xls');

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Arquivo não encontrado');
        } else {
            res.writeHead(200, { 'Content-Type': 'application/vnd.ms-excel' });
            res.end(data);
        }
    });
}).listen(PORT, () => {
    console.log(`Servidor rodando em http://127.0.0.1:${PORT}/doc.xls`);
});