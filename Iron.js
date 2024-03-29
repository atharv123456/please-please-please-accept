class Iron {
    constructor(x, y, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':3,
          'density':30
      }
      this.body = Bodies.rectangle(x, y, 80, height, options);
      this.width = 80;
      this.height = height;
      Matter.Body.setAngle(this.body,angle)
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("black");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };