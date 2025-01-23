function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let bgColor = color(random(20, 50), random(10, 30), random(20, 100));
  background(bgColor);
  let seguir = mouseX + 0.5;
  let seguirY = mouseY + 0.5;
  let circleSize = map(mouseX, 0, width, 20, 150); // tamaño en x
  // Usando un for loop para dibujar círculos
  for (let x = 0; x < width; x += 25) {
    for (let y = 0; y < height; y += 50) {
      fill(200, 20, 100, 60); // color y opacidad
      noStroke();
      circle(x, y, circleSize, 25, 20, 10, 10); // size circulos
    }
  }
}
