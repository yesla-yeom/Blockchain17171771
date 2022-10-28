const counter = require("./counter.js");

counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.increase();

function a() {
  counter.increase();
  return;
}

console.log(counter.increase()); // counter.js에서 리턴되는 값이 없어서 undefined
console.log(counter.getCount());
