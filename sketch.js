function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill(100, 20, 200, 50);
  noStroke();
  // Usando un for loop para dibujar círculos
  for (let x = 0; x < width; x += 25) {
    for (let y = 0; y < height; y += 50)
      rect(mouseX + x * 10, mouseY + (y + 20), random(15, 50));
  }
}
