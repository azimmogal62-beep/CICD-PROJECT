const http = require('http');

const server = http.createServer((req, res) => {
    res.end("🎉 Congratulations! CI/CD Pipeline is Successfully Deployed 🚀");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
