// 最終課題を制作しよう

let x = 0;
let y = 0;
let vx = 0;
let vy = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(5, 0, 15);
  noStroke();

  // 青い光
  for (let i = 50; i > 0; i--) {
    fill(0, 80, 255, 3);
    ellipse(width * 0.2, height * 0.5, i * 30, i * 30);
  }

  // 紫の光
  for (let i = 50; i > 0; i--) {
    fill(130, 0, 255, 3);
    ellipse(width * 0.5, height * 0.5, i * 30, i * 30);
  }

  // ピンクの光
  for (let i = 50; i > 0; i--) {
    fill(255, 0, 150, 3);
    ellipse(width * 0.8, height * 0.5, i * 30, i * 30);
  }

  // 粒子の移動
  x += vx;
  y += vy;

  // 粒子の表示
  fill(225, 0, 0, 225);
  ellipse(x, y, 50, 50);
}

// クリックした場所に粒子を発生させる
function mousePressed() {
  x = mouseX;
  y = mouseY;

  vx = random(-5, 5);
  vy = random(-5, 5);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
