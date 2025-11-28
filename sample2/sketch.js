function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(255);

  // 머리카락 (뒤 배경)
  fill(0, 0, 0); 
  ellipse(300, 220, 220, 280); 
  noStroke();
  rect(200, 220, 200, 180, 100); 
  noStroke();
  
  // 얼굴
  fill(255, 235, 220); 
  ellipse(300, 200, 160, 180);
  noStroke();

  // 눈
  fill(255);
  ellipse(260, 200, 55, 70); 
  ellipse(340, 200, 55, 70); 

  fill(101, 67, 33); 
  ellipse(260, 200, 35, 45);
  ellipse(340, 200, 35, 45);
  noStroke();

  fill(0); 
  ellipse(260, 200, 18, 25);
  ellipse(340, 200, 18, 25);

  fill(255); 
  ellipse(255, 190, 6, 6);
  ellipse(335, 190, 6, 6);
  
  noFill();
  stroke(101, 67, 50); 
  strokeWeight(4);
  arc(260, 173, 50, 20, PI + QUARTER_PI, TWO_PI - QUARTER_PI); 
  arc(340, 173, 50, 20, PI + QUARTER_PI, TWO_PI - QUARTER_PI);

  // 볼터치
  noStroke();
  fill(255, 180, 180, 180);
  ellipse(230, 230, 35, 20);
  ellipse(370, 230, 35, 20);

  // 코
  fill(0);
  ellipse(300, 225, 4, 4);

  // 입
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(300, 245, 25, 15, 0, PI);

  // 목
  noStroke();
  fill(255, 235, 220); 
  rect(280, 280, 40, 40, 10); 
  
  // 앞머리
  fill(0, 0, 0);
  arc(300, 160, 160, 120, PI, TWO_PI, CHORD); 

  // 옷
  noStroke();
  fill(50, 50, 255);
  rect(230, 300, 140, 120, 20);

  // 옷 주름
  noFill();
  stroke(255, 255, 250);
  strokeWeight(3);
  arc(300, 300, 80, 20, 0, PI);
}
