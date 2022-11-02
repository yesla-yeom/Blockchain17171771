const fs = require("fs").promises;
// 변수 fs = fs 안의 promise들!

// file 읽기
fs.readFile("./text-new.txt", "utf8")
  .then((data) => console.log(data))
  .catch(console.error);

// file 쓰기 - writeFile은 then 값 X
fs.writeFile("./text-new.txt", "Hi Hello!").catch(console.error);

// file 추가
// fs.appendFile("./file.txt", " put your hands up!").catch(console.error);

fs.appendFile("./file.txt", " put your hands up!")
  .then(() => {
    // file 복사
    fs.copyFile("./file.txt", "./file2.txt").catch(console.error);
  })
  .catch(console.error);

// folder 관련 - make directory
fs.mkdir("sub-folder").catch(console.error);

// 현재 경로의 모든 파일 읽기
fs.readdir("./").then(console.log);
