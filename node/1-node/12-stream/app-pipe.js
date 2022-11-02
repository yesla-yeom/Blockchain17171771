const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./file4.zip");
const piping = readStream.pipe(zlibStream).pipe(writeStream); // stream의 데이터를 읽어 오면서 읽은 그대로 연결
piping.on("finish", () => {
  console.log("done!!");
});

const http = require("http");

// const server = http.createServer((req, res) => {
//   fs.readFile("file.txt", (err, data) => {
// ㄴ file을 읽고, data를
// res.end(data);
// ㄴ 반응해서 보내줌
//   });
// });

// 위와 똑같은 기능
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream("./file.txt");
  // file을 읽고, data를
  stream.pipe(res);
  // 반응해서 연결해줌
});

server.listen(3000);
