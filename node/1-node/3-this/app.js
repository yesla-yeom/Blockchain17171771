function hello() {
  console.log(this);
  console.log(this === global);
}

hello();
// 브라우저(함수) 안에서 this는 global임

class A {
  constructor(num) {
    this.num = num;
    console.log(num);
  }
  memberFunction() {
    console.log("----- class -----");
    console.log(this);
    console.log(this === global);
  }
}

const a = new A(1);
a.memberFunction();

console.log("--- global scope ---");
console.log(this);
console.log(this === module.exports);
// 노드 안에서 this는 module의 exports임
