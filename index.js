let coin = 1000;
let check = 0;
let myChoiceCheck = 0;

const comimgArray = new Array();
comimgArray[0] = "0-kawi_right.png";
comimgArray[1] = "1-bawi_right.png";
comimgArray[2] = "2-bo_right.png";

function imgchng() {
  const comimgNum = Math.round(Math.random() * 2);
  let objComimg = document.getElementById("comimg");
  objComimg.src = comimgArray[comimgNum];
  // console.log(comimgNum);
  setTimeout(imgchng, 900);
}

imgchng();

// 컴퓨터의 가위바위보가 한 자리에 배열되어 천천히 자동 슬라이드(1) --- 성공

const getmoney = document.getElementById("getmoney");
getmoney.innerText = coin;
function start() {
  // 스타트 누르면 100원씩 차감
  if (check == 0) {
    check++;
    // 코인이 100원 차감되지 않았는가 0
    if (coin < 100) {
      alert("Insert Coins");
    } else {
      coin -= 100;
      getmoney.innerText = coin;
    }
    console.log(coin);
  } else {
    alert("You clicked START already");
    // 코인이 100원 차감 1
  }
  // 스타트 눌렀는지 안 눌렀는지 확인 필요
  let start = (document.getElementById("start").style.border =
    "5px solid blue");
  // 스타트 누르면 스타트에 테두리 생김 --- 성공
  clearTimeout(imgchng);
  // 컴퓨터 가위바위보 자동슬라이드(1) 멈춤 --- 성공
  setInterval(imgchng, 200);
  // 자동슬라이드(1) 빠르게 변환 --- 성공
}

// let kaimg = document.querySelector("#id-kaimg:hover");
// 스타트 후 플레이어 가위바위보에 마우스를 갖다 대면 빙글빙글 돌기 --- 다시

let kaimg = document.getElementById("kaimg");
let baimg = document.getElementById("baimg");
let boimg = document.getElementById("boimg");

kaimg.onclick = function () {
  if (check == 0) {
    alert("Click START!");
  } else {
    if (myChoiceCheck == 0) {
      kaimg.style.border = "4px dashed red";
      myChoiceCheck++;
    } else {
      alert("You clicked the one already");
    }
  }
  baimg.onclick = function () {
    if (myChoiceCheck == 0) {
      baimg.style.border = "4px dashed red";
      myChoiceCheck++;
    } else {
      alert("You clicked the one already");
    }
  };
  boimg.onclick = function () {
    if (myChoiceCheck == 0) {
      boimg.style.border = "4px dashed red";
      myChoiceCheck++;
    } else {
      alert("You clicked the one already");
    }
  };
};
// 여기까지 start 버튼 누르기 전 가위 냈을 때 / 가위 내고 또 눌렀을 때

baimg.onclick = function () {
  if (check == 0) {
    alert("Click START!");
  } else {
    if (myChoiceCheck == 0) {
      baimg.style.border = "4px dashed red";
      myChoiceCheck++;
    } else {
      alert("You clicked the one already");
    }
  }
  kaimg.onclick = function () {
    if (myChoiceCheck == 0) {
      kaimg.style.border = "4px dashed red";
      myChoiceCheck++;
    } else {
      alert("You clicked the one already");
    }
  };
  boimg.onclick = function () {
    if (myChoiceCheck == 0) {
      boimg.style.border = "4px dashed red";
      myChoiceCheck++;
    } else {
      alert("You clicked the one already");
    }
  };
};
// 여기까지 start 버튼 누르기 전 바위 냈을 때 / 바위 내고 또 눌렀을 때

boimg.onclick = function () {
  if (check == 0) {
    alert("Click START!");
  } else {
    if (myChoiceCheck == 0) {
      boimg.style.border = "4px dashed red";
      myChoiceCheck++;
    } else {
      alert("You clicked the one already");
    }
  }
  kaimg.onclick = function () {
    if (myChoiceCheck == 0) {
      kaimg.style.border = "4px dashed red";
      myChoiceCheck++;
    } else {
      alert("You clicked the one already");
    }
  };
  baimg.onclick = function () {
    if (myChoiceCheck == 0) {
      baimg.style.border = "4px dashed red";
      myChoiceCheck++;
    } else {
      alert("You clicked the one already");
    }
  };
};
// 여기까지 start 버튼 누르기 전 보 냈을 때 / 보 내고 또 눌렀을 때

// 플레이어가 선택한 가위(바위)(보)에 테두리를 입혀 뭘 냈는지 표시 --- 성공

// ---------------------------------------------------

setInterval(imgchng, 1000);
// 플레이어 가위바위보 선택 시 컴퓨터 가위바위보 셋인터벌로 속도 느리게 --- 다시

// math.random으로 가위바위보 랜덤으로 하나 선택되게 함
// 가위 0, 바위 1, 보 2

// if 사용?
// 플레이어가 이기면(0) 컴퓨터가 가위바위보 속도 천천히 줄여가며 멈추고
// 상단 WIN 점수 +1
// 그리고 동시에 코인라인 색 변화 속도 빨라짐
// 그러다 느리게 멈추고 랜덤으로 코인 하나 선택됨
// 코인 수만큼 하단 금액에 x100 값 표시
// 다시 스타트 버튼 클릭~

// 플레이어가 비기면(1) 컴퓨터가 가위바위보 속도 천천히 줄여가며 멈추고
// 상단 DRAW 점수 +1
// 다시 스타트 버튼 클릭~

// 플레이어가 지면(2) 컴퓨터가 가위바위보 속도 천천히 줄여가며 멈추고
// 상단 LOSE 점수 +1
// 다시 스타트 버튼 클릭~
