const fs = require("fs");

const readStream = fs.createReadStream("./file.txt", {
  highWaterMark: 8,
  // highWaterMark >> 한 번에 얼만큼의 데이터를 가져오는지 읽을 수 있음, 기본 단위는 64 kbytes
  encoding: "utf-8",
});

const data = []; // 데이터라는 배열 만들기
readStream.on("data", (chunk) => {
  data.push(chunk); // 배열에 chunk 넣기
  // console.log(chunk) >> 데이터 전문 나옴
  console.count("data");
});

readStream.on("end", () => {
  // end 하면
  console.log(data.join(""));
  // 데이터를 ""로 묶어주기
});

readStream.on("error", (error) => {
  console.log(error);
});
