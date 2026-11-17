
// 折れ線グラフ
function setup() {
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for (let i = 0; i < 10; i++) {
    scores[i] = random(20, 100);
  }

  // 横線を引く
  const n = 10;
  for (let i = 0; i < n; i++) {
    line(0, height * i / n, width, height * i / n);
  }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;
  let px, py;

  for (let i = 0; i < scores.length; i++) {

    // 点数を座標に変換
    const x = i * dx + dx / 2;
    const y = height - height * scores[i] / 100;

    // 前の点と現在の点を線でつなぐ
    if (i > 0) {
      line(px, py, x, y);
    }

    // 現在の点を保存
    px = x;
    py = y;

    // 点を描く
    circle(x, y, 8);
  }
}
