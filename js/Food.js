class Food {

constructor(){
this.image = loadImage("milk.png")
this.foodStock = 0


}
getFoodStock(){
return this.foodStock

}
updateFood(foodStock){
this.foodStock = foodStock

}
display(){
    var x = 80;
    var y = 130;

    imageMode(CENTER)
  
    if(this.foodStock !== 0){

        for(var i = 0;i<this.foodStock;i++){
            if(i%12==0){
                x = 80
                y=y+60
            }
image(this.image,x,y,50,50)
   x = x+50

        }
    }
}
}