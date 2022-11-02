// Buffer >> Fixed-size chuck of memory 고정된 사이즈의 메모리 덩어리,
// array of integers 숫자의 배열이고 byte of data 메모리에 있는 데이터 그 자체

const fs = require("fs");

const buf = Buffer.from("Hi");
console.log(buf); // 유니코드
console.log(buf.length);
console.log(buf[0]); // 아스키코드
console.log(buf[1]);
console.log(buf.toString()); // toString에 인코딩 전달 가능
// But, fs 선언 안 해놔서 .. 해야 함

// buffer 생성하기
const buf2 = Buffer.alloc(2); // 사이즈 2개인 버퍼 만들기
const buf3 = Buffer.allocUnsafe(2); // 공간을 확보하지만 초기화하지 않음, 빠름
// But, 데이터가 있을 수 있으므로 항상 초기화를 해주는 것이 좋음
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2.toString());
console.log(buf3.toString());

buf2.copy(buf3); // buf2에 있는 데이터를 buf3에 복사
console.log(buf2.toString());
console.log(buf3.toString());

// buffer 모으기
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf);
console.log(newBuf.toString());
