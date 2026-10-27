// ギリシャ国旗（ほかの国旗に挑戦してもOK）
function setup() {
  createCanvas(300, 180);
  noStroke();

  fill(247, 209, 71)
  rect(0, 0, 300, 45)
  fill(255)
  rect(0, 45, 300, 45)
  fill(220, 70, 72)
  rect(0, 90, 300, 45)
  fill(23, 60, 159)
  rect(0, 135, 300, 45)
  fill(66, 148, 70)
  triangle(0, 0, 153, 90, 0, 180)
  fill(255)
  ellipse(50, 90, 85, 85)
  fill(66, 148, 70)
  ellipse(68, 90, 80, 80)
  for (let i = 0; i < 4; i++) {
    fill(255)
    ellipse(63, 60 + i * 20, 10, 10)
  }
}