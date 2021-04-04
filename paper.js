class Paper{
    constructor(x,y,radius){
    var Options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body= Bodies.circle(x,y,radius,Options);
    this.radius=radius
    World.add(world,this.body)
    this.image=loadImage("Sprites/paper.png")
    
}
display(){
    var pos =this.body.position;
    imageMode(RADIUS);
   // fill("white");
    image(this.image,200,200,this.radius,this.radius);
}
}