class Chain{
    constructor(bodyA,bodyB){
        var props={
            //our bodyA is bird's body
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness: 0.05,
            length: 10
        }
    
        this.chain=Constraint.create(props);
        World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        push();
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}