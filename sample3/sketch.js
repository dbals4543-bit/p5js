// 캐릭터 이동, 표정, 눈 깜박임, 마우스 인터랙션 포함 버전
let x = 0;                  // 캐릭터 위치 이동값
let blink = false;          // 눈 깜박임 여부
let blinkTimer = 0;         // 눈 깜박 타이머
let expression = "normal";  // 표정 상태: normal / surprise / smile
let cheekAlpha = 180;       // 볼터치 투명도 (마우스 인터랙션용)
let hairWave = 0;           // 머리카락 흔들림 각도

function setup() {
  createCanvas(600, 400);
  frameRate(30);
}

function draw() {
  background(255);

  // ----- 머리카락 흔들림 -----
  hairWave = sin(frameCount * 0.05) * 5;

  push();
  translate(x, 0); // 캐릭터 이동

  // 머리카락 (뒤)
  fill(0);
  ellipse(300, 220, 220 + hairWave, 280);
  noStroke();
  rect(200, 220, 200, 180, 100);

  // 얼굴
  fill(255, 235, 220);
  ellipse(300, 200, 160, 180);

  // 눈
  if (!blink) {
    fill(255);
    ellipse(260, 200, 55, 70);
    ellipse(340, 200, 55, 70);

    fill(101, 67, 33);
    ellipse(260, 200, 35, 45);
    ellipse(340, 200, 35, 45);

    fill(0);
    ellipse(260, 200, 18, 25);
    ellipse(340, 200, 18, 25);

    fill(255);
    ellipse(255, 190, 6, 6);
    ellipse(335, 190, 6, 6);
  } else {
    // 눈 감기
    stroke(0);
    strokeWeight(6);
    line(235, 200, 285, 200);
    line(315, 200, 365, 200);
  }

  // 눈썹
  noFill();
  stroke(101, 67, 50);
  strokeWeight(4);
  arc(260, 173, 50, 20, PI + QUARTER_PI, TWO_PI - QUARTER_PI);
  arc(340, 173, 50, 20, PI + QUARTER_PI, TWO_PI - QUARTER_PI);

  // 볼터치
  noStroke();
  fill(255, 150, 150, cheekAlpha);
  ellipse(230, 230, 35, 20);
  ellipse(370, 230, 35, 20);

  // 코
  fill(0);
  ellipse(300, 225, 4, 4);

  // 입
  drawMouth(expression);

  // 목
  noStroke();
  fill(255, 235, 220);
  rect(280, 280, 40, 40, 10);

  // 앞머리
  fill(0);
  arc(300, 160, 160, 120 + hairWave / 2, PI, TWO_PI, CHORD);

  // 옷
  noStroke();
  fill(50, 50, 255);
  rect(230, 300, 140, 120, 20);

  // 옷 주름
  noFill();
  stroke(255, 255, 250);
  strokeWeight(3);
  arc(300, 300, 80, 20, 0, PI);

  pop();

  // ----- 눈 깜박임 타이머 관리 -----
  blinkTimer++;
  if (blinkTimer % 60 == 0) {
    blink = !blink;
  }

  // ----- 볼터치 점점 사라짐 -----
  cheekAlpha = lerp(cheekAlpha, 180, 0.1);
}

// 표정에 따라 입 모양 다르게 그리기
function drawMouth(type) {
  noFill();
  stroke(0);
  strokeWeight(2);

  if (type === "normal") {
    arc(300, 245, 25, 15, 0, PI);
  } else if (type === "smile") {
    arc(300, 245, 40, 25, 0, PI);
  } else if (type === "surprise") {
    noStroke();
    fill(0);
    ellipse(300, 245, 20, 25);
  }
}

// 마우스를 누르면 볼터치 반짝 + 눈 깜박
function mousePressed() {
  blink = true;
  cheekAlpha = 255;
}

// 키보드로 이동 및 표정변경
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    x += 10;
  } else if (keyCode === LEFT_ARROW) {
    x -= 10;
  } else if (keyCode === UP_ARROW) {
    expression = "surprise";
  } else if (keyCode === DOWN_ARROW) {
    expression = "smile";
  }
}

function keyReleased() {
  expression = "normal";
}


function keyPressed() {
  if (key === 's') {
    saveGif('mySketch',10);
  }
}