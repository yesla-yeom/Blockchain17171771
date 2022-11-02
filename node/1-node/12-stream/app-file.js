const fs = require("fs");

const beforeMem = process.memoryUsage().rss; // 현재 메모리 상태를 beforMem으로 저장
fs.readFile("./file.txt", (_, data) => {
  // file 읽고
  fs.writeFile("./file2.txt", data, () => {});
  // file2 똑같은 내용으로 만듦
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  // 계산
  console.log(diff);
  console.log(`Consumed Memory : ${consumed}MB`);
});
