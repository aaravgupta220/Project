class Rope{
    constructor(body1, body2, offsetX, offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
 
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(5);

        var oneX = pointA.x;
        var oneY = pointA.y;
        var twoX = pointB.x + this.offsetX;
        var twoY = pointB.y + this.offsetY;

        line(oneX, oneY, twoX, twoY);
    };
};
