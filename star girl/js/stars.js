var starObj=function () {
    this.x;
    this.y;
    this.picNo;
    this.timer;
    this.xspd;
    this.yspd;
}
starObj.prototype.init=function () {
    this.x=Math.random()*600+100;
    this.y=Math.random()*300+150;
    this.picNo=Math.floor(Math.random()*7);
    this.timer=0;
    this.xspd=Math.random()*3-1.5;
    this.yspd=Math.random()*3-1.5;
}
starObj.prototype.update=function  (){
    this.x+=this.xspd*deltaTime*0.004;
    this.y+=this.yspd*deltaTime*0.004;
    if(this.x<100||this.x>700){
        this.init();
        return;
    }
    if(this.y<150||this.y>450){
        this.init();
        return;
    }
    this.timer+=deltaTime;
    if(this.timer>50){
        this.picNo +=1;
        this.picNo %=7;
        this.timer=0;
    }

}
starObj.prototype.draw=function () {
    //drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
    ctx.save();
    //globalAlpha全局透明度
    ctx.globalAlpha=life;
    ctx.drawImage(starPic,this.picNo*7,0,7,7,this.x,this.y,7,7);
    ctx.restore();
}
function drawStars() {
    for(var i=0;i<num;i++){
        stars[i].update();
        stars[i].draw();
    }
}
function aliveUpdate() {
 if(switchy){
    life+=0.03*deltaTime*0.05;
    if(life>1){
        life=1;
    }
 } else{
    life-=0.03*deltaTime*0.05;
    if(life<0){
        life=0;
    }
 }

 //console.log(switchy);
}