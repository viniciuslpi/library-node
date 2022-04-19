const http = require('http');
const port = 3000;

const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na página '
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Curso de Node');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})