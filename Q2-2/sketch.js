// チェッカー
function setup() {
  createCanvas(200, 200);
  noStroke();
  const size = width / 8; // マスの一辺の長さ
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 == 0) {
        fill(255);
      }
      else {
        fill(100);
      }
      rect(size * i, size * j, size, size);
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
      if (j < 3 && (i + j) % 2 == 1) {
        fill(255, 0, 0);
        ellipse(size * i + size / 2, size * j + size / 2, size *0.8);
      }
      else if (j > 4 && (i + j) % 2 == 1) {
        fill(0);
        ellipse(size * i + size / 2, size * j + size / 2, size *0.8);
      }
    }
  }
}

