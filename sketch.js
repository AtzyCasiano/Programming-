var diam1 = 0;
function setup() {
  // put setup code here
    createCanvas(500,500);
    }

function draw() {
  // put drawing code here
    background("#09098d");
    fill("#f6ff20");
    ellipse(mouseX,mouseY,40,40);
    fill("#ffffff");
    ellipse(mouseY,mouseX,-40,-40);
   ellipse(random(width),random(height),diam1,diam1);
     
    
    
    textSize(50);
    textFont("Georgia");
    textStyle(ITALIC);
    text("Active",40,70);
    //diam1 = diam1+1;
    
    
}
function mousePressed(){
      if (diam1 >= 3){
        diam1 = 0;
    }else{
        diam1 = diam1 +5;}
}