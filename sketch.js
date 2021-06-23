//Create variables here
var dog,dogImg,happydog,bgImg
var database;
var foods,foodStock
var food;
var addFood,Feed;
var btn
var fedtime,lastfed
function preload()
{
  dogImg = loadImage("D2.png")
	//load images here
  happydog = loadImage("D.png")
  bgImg = loadImage("Wow.jpeg")
btn = loadImage("btn.png")

}

function setup() {
	createCanvas(1000, 500);
  dog = createSprite(800,370)
  dog.addImage(dogImg)
  dog.scale = 0.3

  database = firebase.database()
  foodStock = database.ref("Food")
  foodStock.on("value",readFood);
  food = new Food();
  addFood = createButton("Add Food")
  addFood.position(500,100)
 addFood.size(100,30)
 addFood.style('background-color','cyan')

  Feed = createButton("Feed The Dog")
  Feed.position(800,100)
  Feed.style('background-color','lightgreen')
Feed.size(100,40)
 
  addFood.mousePressed(AddFood)
 Feed.mousePressed(FeedFood)


}


function draw() {  
background(bgImg);
if(keyWentDown(UP_ARROW)){

  writeStock(foods);

  dog.addImage(happydog)
  
}
fedtime = database.ref("FeedTime")
fedtime.on("value",function(data){

  lastFed = data.val()
})

  drawSprites();
  //add styles here
 food.display()
  fill("white")
  textSize(20)
  text("Note : You Have to Take Care OF Your Pet",320,20)
 
}
function readFood(data){
foods = data.val()

food.updateFood(foods)

}

function writeStock(x){

  if(x<=0){

    x = 0
    
    }else{
      x = x-1
    }
    if(x === 0){
      fill("black")
      textSize(20)
        text("Sorry Stock Finished", 150,250).setLifeTime()
        
        }
  
 //x = x-1
database.ref("/").update({

Food:x

})

}
function AddFood(){

  foods++
  database.ref('/').update({

'Food':foods

  })
}

function FeedFood(){
  if(foods>0){
foods--;




dog.addImage(happydog)
dog.y = 330

database.ref("/").update({
'Food':foods,
FeedTime:hour(),
FeedMin:minute()


})

  }

}


