const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message</title><head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></form></body>')
        res.write('</html>')
        return res.end();
    }


    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk);
        })
       return  req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]

            fs.writeFileSync('message.txt', req.url)
            res.statusCode = 302;
            res.setHeader('Location', '/')
            return res.end();
        })
    }
    res.setHeader('content-type', 'text/html')
    res.write('<html>');
    res.write('<body>')
    res.write('<h4>testpage<h4>');
    res.write('</body>')
    res.write('</html>');
    res.end()
})
server.listen(16500);