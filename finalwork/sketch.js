// 最終課題を制作しよう
let k = 0;
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
  if (k < 3) {
    fill(225, 0, 0, 225);
    vx = vx + random(-1, 1);
    vy = vy + random(-1, 1);
    if (x > width || x < 0) {
      vx = -vx
    }
    if (y > height || y < 0) {
      vy = -vy;
    }
    vx = constrain(vx, -10, 10);
    vy = constrain(vy, -10, 10);
  }
  else if (k < 7) {

    fill(0, 225, 0, 225);
    vx += random(-0.05, 0.05);
    vy += random(-0.1, 0.1);
    vx = constrain(vx, -1, 1);
    vy = constrain(vy, -1, 1);
    if (x > width || x < 0) {
      vx = -vx
    }
    if (y > height || y < 0) {
      vy = -vy;
    }

  }
  else {

    fill(0, 0, 225, 225);
    
    y += 0.3;

    
    x += sin(frameCount * 0.03) * 1.5;
  
     
    if (y > height || y < 0) {
      y -= 0.3;
      x=mouseX;
    }

    vx = constrain(vx, -1, 1);
    vy = constrain(vy, -1, 1);

  }

  ellipse(x, y, 10, 10);
}

// クリックした場所に粒子を発生させる
function mousePressed() {
  x = mouseX;
  y = mouseY;
  k = random(0, 10)
  if (k < 3) {
    vy = 0;
    vx = 0;
  }
  else if (k < 7) {
    vy = 0;
    vx = 0;
  }
  else {
    vy = 0;
    vx = 0;

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
