
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint


function setup() {
	createCanvas(800,400);
    engine = Engine.create();
	world = engine.world;
  g=new Ground(400,375,800,40)  
  g2=new Ground(400,50,400,40)  
  ball1=new ball(50,100)
  c=new Chain(ball1.body,{x:250,y:50})
  ball2=new ball(320,300)
  c2=new Chain(ball2.body,{x:320,y:50})
  ball3=new ball(380,300)
  c3=new Chain(ball3.body,{x:380,y:50})
  ball4=new ball(440,100)
  c4=new Chain(ball4.body,{x:440,y:50})
  ball5=new ball(500,300)
  c5=new Chain(ball5.body,{x:500,y:50})
  ball6=new ball(560,300)
  c6=new Chain(ball6.body,{x:560,y:50})
  
 
    Engine.run(engine);
  
}


function draw() {
  background(0) 
  g.display()
  g2.display()
  ball1.display()
  c.display()
  ball2.display()
  c2.display()
  ball3.display()
  c3.display()
  ball4.display()
  c4.display()
  ball5.display()
  c5.display()
  ball6.display()
  c6.display()

}
  