class Bob {
 
    constructor(x, y, radius){
 
        var options = {
            isStatic : false,
            restituion : 0.1,
            friciton : 0,
            density : 0.1
        }
 
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
        World.add(world, this.body);
    }
        display (){
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y);
            strokeWeight(3);
            fill(255,0,255);
            ellipse(0, 0, this.radius, this.radius);
            pop();
        }
 
}
