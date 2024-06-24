const app = require("./app")
const http = require("http")
const server = http.createServer(app)
const PORT = 2000
server.listen(PORT, function() {
    console.log("app listen on port 2000")
})