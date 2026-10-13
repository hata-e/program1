// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 8; // マスの一辺の長さ

    for(let i = 0; i < 8; i++){
      for(let j = 0; j < 8; j++){
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
        rect(size * i, size * j, size, size);
      }
      if((i + j) % 2 == 0){
        fill(255); // 白
      } else {
        fill(0); // 黒
      }
    }
  }
