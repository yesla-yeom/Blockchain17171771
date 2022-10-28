const process = require("process");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
  console.log("setTimeout");
}); // 콜백함수 비동기. 다~ 끝나고 0초 후 실행

process.nextTick(() => {
  console.log("nextTick");
}); // 콜백함수 비동기. 다른 애들 다음으로 실행
