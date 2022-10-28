console.log("logging");
console.clear();

// log level
console.log("log"); // 개발용
console.info("info"); // 정보용
console.warn("warn"); // 경보용
console.error("error"); // 에러, 사용자 에러, 시스템 에러

// assert : false일 경우 출력
console.assert(2 === 3, "not same!");
console.assert(2 === 2, "same!");

// print object
const student = { name: "ellie", age: 20, company: { name: "AC" } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 0 });

// measuring time : 성능 확인 시 유용
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

// counting : 함수 호출 횟수 카운트
a = () => {
  console.count("a function");
};
a();
console.countReset("a function");
a();

// trace
f1 = () => {
  f2();
};
f2 = () => {
  f3();
};
f3 = () => {
  console.log("f3");
  console.trace();
};
f1();
