 function Player(){
    this.x=50;
    this.y=gameConstants.FLOOR;
    this.h=this.w=100;
    this.img=playerImage;
    this.isjumpStart=false;
    this.Force=0;
    this.gravity=0.5;
   
    this.drawPlayer=function(){
       image(this.img,this.x,this.y,this.w,this.h);  
    }
    this.jumpPlayer=function(){
         
       if(!this.isjumpStart){
           this.Force=-15;
           this.y+=this.Force;
           this.isjumpStart=true;
        }
    }
    this.fallPlayer=function(){
        if(this.y<gameConstants.FLOOR){
            this.Force+=this.gravity;
            this.y+=this.Force;
            }
        if(this.y>=gameConstants.FLOOR){
            this.isjumpStart=false;
            
        }
    }
    
}