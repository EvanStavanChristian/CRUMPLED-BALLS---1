class Papper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        Matter.ball = Bodies.circle(100, 100, 2, {isStatic:true}, {x: 100, y: 100})
        World.add(world, ball);
    }
    display(){
        ball.display();
    }
}