let count = 0;

function increase() {
  count++;
  // 값은 늘지만 반환되는 값이 없음
}

function getCount() {
  return count;
}

module.exports.getCount = getCount;
module.exports.increase = increase;
// 모듈아! 함수를 app.js로 보내거라!
