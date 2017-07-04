function setup() {
  createCanvas(600, 600);
  console.log(width, height);
}

function draw() {
  background(255);
  noFill();
  ellipse(mouseX, mouseY, width/4, height/4);

}
