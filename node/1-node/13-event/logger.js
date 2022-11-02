const EventEmitter = require("events");

class Logger extends EventEmitter {
  // Logger라는 클래스가 EventEmitter 클래스를 상속한다고 선언
  log(callback) {
    this.emit("log", "started..."); // log라는 이벤트 발생시키고, 인자로 started라는 메시지 출력
    callback();
    this.emit("log", "ended!"); // class 형식이므로 나 자신이라는 this 붙여야 함
  }
}

module.exports.Logger = Logger;
