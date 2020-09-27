class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          'restitution':0.3 ,
          'friction':0.5,
          'density':1.2
      }

      this.body = Bodies.circle(x, y, radius , options);
      this.radius=50;
      //this.image = loadImage("paper.PNG");
      this.width=50;
      this.height=50
    
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
     translate(pos.x, pos.y);
      //rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("white");
      //fill("black");
      ellipse(0, 0, this.radius,this.radius);
     // image(this.image,-40,-40,this.width,this.height);
      //imageMode(RADIUS)

      pop();
    }
  };