class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            image(this.sling1,200,70,30,150);
            image(this.sling2,180,75,30,80);
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);
            if(pointA.x<220){
            strokeWeight(7);
            image(this.sling3,pointA.x-20, pointA.y,10,15)
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y+20);
            line(pointA.x-20, pointA.y, pointB.x+20, pointB.y+15);  
            }
            else {
            strokeWeight(4);
            image(this.sling3,pointA.x+20, pointA.y,10,15)
            line(pointA.x+20, pointA.y, pointB.x-10, pointB.y+20);
            line(pointA.x+20, pointA.y, pointB.x+20, pointB.y+15);
            }
            
        }
    }
    
}