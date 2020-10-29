var background1 , background_image
var red_image , red1 , red2 , red3 , red4 ,red5 , red6 , red7
var green_image , green1 , green2 , green3 , green4 , green5
var blue_image , blue1 , blue2 , blue3 , blue4
var pink_image , pink1 , pink2
var bow_image , bow 
var arrow_image , arrow1
var  score = 0 
var playSound

function preload(){
 //load your images here 
 background_image =loadImage("background0.png");
  red_image=loadImage("red_balloon0.png")
  green_image=loadImage("green_balloon0.png");
  blue_image=loadImage("blue_balloon0.png");
  pink_image=loadImage("pink_balloon0.png");
  bow_image=loadImage("bow0.png");
    arrow_image=loadImage("arrow0.png");
  playSound=loadSound("Four More Weeks - Vans in Japan.mp3")
}

function setup() {
  createCanvas(600, 600);
   background1=createSprite(0,0,600,600);
  background1.addImage(background_image);
  background1.scale=3;
 
  bow=createSprite(500 ,300,10,10); 
  bow.addImage(bow_image); 
  bow.scale=1.5

 background1.velocityX=2
 redb=new Group();
  greenb=new Group();
  pinkb=new Group();
  blueb=new Group();
  arrowGroup=new Group();
  playSound.play();
 
}

function draw() {
  background(10);
  if (keyWentDown ("space")){
  arrow();    
      
      }
  if (background1.x>300){
      background1.x=background1 . width/2
      
      }
  bow.y =mouseY
  if (frameCount %  150 ===  0){
    var num = Math.round(random(1,4))
    if (num === 1 ){
      red_(); 
    }
   if (num === 2 ){
      green_(); 
    }
   if (num === 3 ){
     blue_(); 
    }
   if (num === 4  ){
     pink_(); 
    }
       
       
    
      
      }
  
 if (arrowGroup.isTouching(redb)){
  score=score+1;    
  redb.destroyEach();    
  arrowGroup.destroyEach();   
}      
if (arrowGroup.isTouching(greenb)){
  score=score+1;    
  greenb.destroyEach();    
  arrowGroup.destroyEach();   
} 
if (arrowGroup.isTouching(blueb)){
  score=score+1;    
  blueb.destroyEach();    
  arrowGroup.destroyEach();   
}
 if (arrowGroup.isTouching(pinkb)){
  score=score+1;    
  pinkb.destroyEach();    
  arrowGroup.destroyEach();   
}   
drawSprites();
   fill("red");
  textSize(20);
  text("Score : "+score,500,20); 
 
}
function arrow(){
arrow1=createSprite(500,bow.y ,10,10);
  arrow1.addImage(arrow_image);
  arrow1.scale=0.5
arrow1.velocityX=-3;
  arrowGroup.add(arrow1)
   arrow1.debug=false;  
  arrow1.setCollider("rectangle",-25,0,200 ,50);
} 
function red_ (){
 red1=createSprite(50,75,10,10); 
  red1.addImage(red_image); 
  red1.scale=0.1 
  red1.velocityX=2;
  red1.lifetime=200
  redb.add(red1)
   
      
}
function green_ (){
 green1=createSprite(100,200,10,10); 
  green1.addImage(green_image); 
  green1.scale=0.1
  green1.velocityX=2;
  green1.lifetime=200;
  greenb.add(green1)
}
function blue_(){
  blue4=createSprite(150,355,10,10); 
  blue4.addImage(blue_image); 
  blue4.scale=0.1
  blue4.velocityX=2;
  blue4.lifetime=200;
  blueb.add(blue4)
}
                                                               function pink_(){
  
  pink2=createSprite(200,323,10,10); 
  pink2.addImage(pink_image); 
  pink2.scale=1.2
  pink2.velocityX=2;
  pink2.lifetime=200;
                                                                 pinkb.add(pink2)
 }
  



