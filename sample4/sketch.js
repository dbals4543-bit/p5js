let t = 0;

function setup() {
  createCanvas(300, 300);
  noFill();
  stroke(0);
  background(255);
}

function draw() {
  background(255);

  colorMode(HSB, 360, 100, 100);
  let color1 = color(210, 80, 60);
  let color2 = color(330, 80, 60);
  let mix = (sin(t * 0.02) + 1) / 2; // 0~1
  let currentStroke = lerpColor(color1, color2, mix);
  stroke(currentStroke);
  noFill();

  let R = 50 + sin(t * 0.05) * 20;
  let R2 = 50 + cos(t * 0.05) * 20;

  ellipse(100, 100, R * 2, R * 2);
  ellipse(100, 200, R2 * 2, R2 * 2);

  let dx = cos(t * 0.05) * (10 + R * 0.2);
  let dy = sin(t * 0.04) * (10 + R2 * 0.2);

  fill(0);
  noStroke();
  ellipse(80 + dx, 80 + dy, 15 + R * 0.1, 15 + R * 0.1);
  ellipse(120 + dx * 0.5, 80 - dy * 0.5, 15 + R * 0.08, 15 + R * 0.08);

  fill(255, 165, 0);
  noStroke();
  triangle(120, 100, 100 + dx, 90 - dy, 100 + dx, 110 - dy);

  fill(255, 0, 0);
  ellipse(100, 129, 40 + R * 0.1, 10 + R * 0.05);

  t++;
}

function keyPressed() {
  if (key === 's') {
saveGif('mySketch2',10);
  }
}
