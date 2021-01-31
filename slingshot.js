class Slingshot{
    
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 1
        }
        this.pointB = pointB
        this.bodyA = bodyA
        this.sling = Constraint.create(options);
    
        World.add(world, this.sling);
 

    }
    
    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //48, 22, 8
        if(this.sling.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x, pointA.y, pointB.x, pointB.y);
          //  line(pointA.x, pointA.y, pointB.x, pointB.y);

            /*if(pointA.x < 210){
                strokeWeight(10);
                stroke(232, 231, 228);
                line(pointA.x-15, pointA.y, pointB.x+25, pointB.y);
                line(pointA.x-15, pointA.y, pointB.x-15, pointB.y);

            }else{
                strokeWeight(3);
                stroke(232, 231, 228);
                line(pointA.x, pointA.y, pointB.x+25, pointB.y);
                line(pointA.x, pointA.y, pointB.x-15, pointB.y);

            }*/
        }

    }
    
}