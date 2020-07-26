let shape = "ellipse"

function setup() {
    createCanvas(500, 500);
    background(255, 255, 255);
 }
  
 function draw() {
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    let opacity = random(120, 180);
    fill(r, g, b, opacity);
    noStroke()
    let size = random(5, 35);
    let offSetX = random(-25, 25);
    let offSetY = random(-25, 25);
    let offSetX2 = random(-30, 30);
    let offSetY2 = random(-30, 30);
    if (shape == "ellipse") {
        ellipse(mouseX + offSetX, mouseY + offSetY, size, size);
    }
    else if (shape == "square") {
        rect(mouseX + offSetX, mouseY + offSetY, size, size);
    }
    else if (shape == "triangle") {
        triangle(mouseX - offSetX + offSetX2, mouseY + offSetY + offSetY2, mouseX + offSetX + offSetX2,
            mouseY + offSetY + offSetY2, mouseX + offSetX2, mouseY - offSetY + offSetY2);
    }
    fill(0);
    rect(0, 0, 150);
    fill(255);
    textSize(20);
    text('Clear Canvas', 15, 50);
 }
  
 function mouseClicked() {
     if (shape == "ellipse") {
         shape = "square";
     }
     else if (shape == "square") {
         shape = "triangle";
     }
     else if (shape == "triangle") {
         shape = "ellipse";
     }
    if (mouseX > 0 && mouseX < 150 && mouseY > 0 && mouseY < 150) {
         background(255);
     }
 }
