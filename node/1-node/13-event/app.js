const EventEmitter = require("events");
const emitter = new EventEmitter(); // EventEmitter 클래스를 이용해 emitter 객체 생성

emitter.on("yena", (args) => {
  // 함수 on을 이용해 이벤트 yena가 발생하면!
  console.log("first callback - ", args);
});

emitter.on("yena", (args) => {
  console.log("second callback - ", args); // args >> 배열
});

emitter.emit("yena", { message: 1 }); // 함수 emit을 이용해 이벤트 yena를 발생시키고, object가 배열 형태로 연결됨
emitter.emit("yena", { message: 2 });
emitter.emit("yena", { message: 3 });

// emitter.removeListener("yena", 변수명) >> yena 이벤트 발생하면 변수명을 제거
