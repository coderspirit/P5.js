function Enemy(){
    this.x=400;
    this.y=gameConstants.FLOOR;
    this.w=this.h=100;
    this.img=enemyImage;
    this.drawEnemy=function(){
        image(this.img,this.x,this.y,this.w,this.h);
    }
    this.moveEnemy=function(){
        this.x+=-4;
        if(this.x<=0){
         this.x=width;
            
            
        }
    }
}