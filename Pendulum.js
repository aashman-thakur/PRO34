class ball {
    constructor(x,y) {
      var options = {
        'restitution':1,
        'slop':1,
        'inertia':Infinity
  }
      this.body = Bodies.circle(x,y,30,options);
      this.radius=30
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      noFill()
      strokeWeight(10)
      stroke(255)
      circle(pos.x, pos.y,this.radius);
    }
  };