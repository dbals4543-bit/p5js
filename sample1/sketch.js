function setup() {
  createCanvas(300, 300);

  noFill();
  stroke(0);
  ellipse(100, 100, 100, 100);
  
 noFill();
  stroke(0);
  ellipse(100, 200, 100, 100);
  
  
  fill(0);
  ellipse(80,80,15,15);
  
  fill(0);
  ellipse(120,80,15,15);
  
  fill(255, 165, 0);  // 주황색
noStroke();

triangle(120, 100, 
         100, 90,    
         100, 110); 
  
   fill(255, 0, 0);   // 빨간색
noStroke();

// 입 (긴 타원)
ellipse(100, 129, 40,10);  


}

