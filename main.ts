import p5 from "p5";

const sketch = (p: p5) => {

  // 描画色1・2
  const color1 = p.color("#fffbe3");
  const color2 = p.color("#24495c");
  // 描画色1の強さ
  let color1amount = 1;
  
  /** 初期化処理 */
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.angleMode(p.DEGREES); // 回転の単位を弧度から角度に変更
    p.noStroke(); // 線なし（塗りつぶしのみ）に設定
    p.background("#131821"); // 背景色を設定
    p.blendMode(p.LIGHTEST); // 合成モードを「LIGHTEST=明るく」に設定
  };

  /** フレームごとの描画処理 */
  p.draw = () => {
    // 塗り色を設定
    p.fill(p.lerpColor(color2, color1, color1amount));
    // 画面中央を原点に
    p.translate(p.width / 2, p.height / 2);
    // フレーム数分（1フレームあたり13度）回転させる
    p.rotate(p.frameCount * 13);
    // 楕円を描く
    p.ellipse(p.frameCount / 2, 0, p.frameCount, p.frameCount / 3);
    // 「描画色1の強さ」を少し弱くする
    color1amount *= 0.995;
  }
}

new p5(sketch);
