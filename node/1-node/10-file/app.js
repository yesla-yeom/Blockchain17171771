const fs = require("fs");
// file system 파일 관련 API

// 모든 API는 3가지 형태
// ① rename(~, callback(error, data)) error or data로 인자 전달
// ② renameSync(~) 블록 방식, 따로 콜백함수 전달X, 오류 날 수 있음, 끝날 때까지 다음 줄로 넘어가지 않음
// →→ try { renameSync(~) } catch(e) {}
// 오류 발생 가능한 코드 try, catch문으로 감싸주기
// ③ promises.rename().then().catch(0)

// bad case) fs.renameSync("./file.txt", "./file-new.txt");
// →→ ②
try {
  // 시도하기
  fs.renameSync("./text.txt", "./text-new.txt");
} catch (error) {
  // 에러 캐치해서 잡아서
  console.error(error); // 에러 출력한 다음
}
// 정상적으로 다음 줄로 넘어가 hello 호출
console.log("hello");

// →→ ①
fs.rename("./text-new.txt", "./text.txt", (error) => {
  console.log(error);
});
console.log("hello"); // 에러가 안 나서 null로 출력

// →→ ③
fs.promises
  .rename("./text.txt", "./text-new.txt") // 해보고
  .then(() => console.log("Done!")) // 정상이면 Done 출력
  .catch(console.error); // 에러 캐치하면 에러 출력
