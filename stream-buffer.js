const http = require("http");
const fs = require("fs");

// Creating a Server Using raw node.js
const server = http.createServer();

// Listener
server.on("request", (req, res) => {
  const readableStream = fs.createReadStream(process.cwd() + "/texts/read.txt");
  if (req.url === "/read-file" && req.method === "GET") {
    // streaming file reading
    readableStream.on("data", (buffer) => {
      res.write(buffer);
    });
  }

  readableStream.on("end", () => {
    res.end("Hello from Bangladeshi People!");
  });
});

server.listen(5000, () => {
  console.log(`server is listening on port 5000`);
});
