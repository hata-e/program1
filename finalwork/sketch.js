let particle = [];
let fishSlots = [];
let black;
let enemy;
let mode = "play";
let joinedCount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  createFishSlots();
  black = {
    x: width * 0.3,
    y: height * 0.5
  };

  for (let i = 0; i < fishSlots.length; i++) {
    particle[i] = {
      x: random(width),
      y: random(height),
      vx: random(-3, 3),
      vy: random(-3, 3),
      joined: false,
      alive: true,
      targetX: fishSlots[i].x,
      targetY: fishSlots[i].y
    };
  }
  enemy = {
    x: random(width),
    y: random(height),
    vx: random(-3, 3),
    vy: random(-3, 3)
  };
}

function createFishSlots() {
  fishSlots = [];
  for (let x = -70; x <= 30; x += 10) {
    for (let y = -30; y <= 30; y += 10) {

      if (x == -70) {
        if (y >= -10 && y <= 10) {
          fishSlots[fishSlots.length] = {
            x: x,
            y: y
          };
        }
      } else if (x == -60) {
        if (y >= -20 && y <= 20) {
          fishSlots[fishSlots.length] = {
            x: x,
            y: y
          };
        }
      } else if (x == 30) {
        if (y >= -10 && y <= 10) {
          fishSlots[fishSlots.length] = {
            x: x,
            y: y
          };
        }
      } else {
        fishSlots[fishSlots.length] = {
          x: x,
          y: y
        };
      }
    }
  }
  for (let x = -120; x < -70; x += 10) {
    for (let y = -20; y <= 20; y += 10) {
      fishSlots[fishSlots.length] = {
        x: x,
        y: y
      };
    }
  }
  fishSlots[fishSlots.length] = { x: -20, y: -40 };
  fishSlots[fishSlots.length] = { x: -10, y: -40 };
  fishSlots[fishSlots.length] = { x: -10, y: -50 };
  fishSlots[fishSlots.length] = { x: 0, y: -40 };
  fishSlots[fishSlots.length] = { x: 0, y: -50 };
  fishSlots[fishSlots.length] = { x: 10, y: -40 };
}
function draw() {
  background(15, 100, 200);
  noStroke();

  if (mode == "play") {
    black.x = mouseX;
    black.y = mouseY;
    for (let i = 0; i < particle.length; i++) {
      let t = particle[i];
      if (t.alive == true) {
        if (t.joined == false) {
          t.vx += random(-0.5, 0.5);
          t.vy += random(-0.5, 0.5);
          t.vx = constrain(t.vx, -4, 4);
          t.vy = constrain(t.vy, -4, 4);
          t.x += t.vx;
          t.y += t.vy;
          if (t.x < 0 || t.x > width) {
            t.vx *= -1;
          }
          if (t.y < 0 || t.y > height) {
            t.vy *= -1;
          }
          if (
            t.x > black.x - 12 && t.x < black.x + 12 && t.y > black.y - 12 && t.y < black.y + 12
          ) {
            t.joined = true;
            joinedCount++;
          }
        }

        if (t.joined == true) {
          let tx = black.x + t.targetX;
          let ty = black.y + t.targetY;

          t.x += (tx - t.x) * 0.12;
          t.y += (ty - t.y) * 0.12;
        }
      }
    }

    enemy.vx += random(-0.5, 0.5);
    enemy.vy += random(-0.5, 0.5);

    enemy.vx = constrain(enemy.vx, -4, 4);
    enemy.vy = constrain(enemy.vy, -4, 4);

    enemy.x += enemy.vx;
    enemy.y += enemy.vy;

    if (enemy.x < 0 || enemy.x > width) {
      enemy.vx *= -1;
    }

    if (enemy.y < 0 || enemy.y > height) {
      enemy.vy *= -1;
    }

    for (let i = 0; i < particle.length; i++) {
      let t = particle[i];

      if (t.alive == true) {

        if (
          t.x > enemy.x - 18 &&
          t.x < enemy.x + 18 &&
          t.y > enemy.y - 18 &&
          t.y < enemy.y + 18
        ) {

          if (t.joined == true) {
            joinedCount--;
          }

          t.alive = false;
        }
      }
    }

    let allJoined = true;

    for (let i = 0; i < particle.length; i++) {
      let t = particle[i];

      if (t.alive == true && t.joined == false) {
        allJoined = false;
      }
    }

    if (allJoined == true) {
      mode = "clear";
    }
  }

  for (let i = 0; i < particle.length; i++) {
    let t = particle[i];

    if (t.alive == true) {
      fill(225, 0, 0);
      noStroke();
      ellipse(t.x, t.y, 12, 12);
    }
  }

  fill(0);
  stroke(255, 80, 80);
  strokeWeight(2);
  ellipse(black.x, black.y, 12, 12);
  noStroke();

  fill(0);
  ellipse(enemy.x, enemy.y, 20, 20);

  fill(255);
  textAlign(LEFT, TOP);
  textSize(20);
  text("SCORE: " + joinedCount, 20, 20);

  if (mode == "clear") {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("GAME CLEAR", width / 2, height / 2);
    textSize(24);
    text("SCORE: " + joinedCount, width / 2, height / 2 + 50);
    textSize(18);
    text("リロードして再スタート", width / 2, height / 2 + 90);
  }

  fill(255);
  textAlign(RIGHT, TOP);
  textSize(20);
  text("スイミー", width - 20, 20);

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
