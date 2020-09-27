class Dustbin {
    constructor(x, y, width,height) {
      var options = {
          isStatic:true,
          'restitution':1.2,
          'friction': 0.5,
          'density':1.2
      }

      this.body = Bodies.rectangle(x, y, width,height, options);
      //this.image = loadImage("dustbin.PNG");
      this.width=width;
      this.height=height;
    
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
     translate(pos.x, pos.y);
    var angle = this.body.angle;
     rotate(angle);
      //rotate(angle);
      //rectMode(CENTER);
      //strokeWeight(4);
      stroke("white");
      fill("black");
      rect(0,0, this.width,this.height);
      //image(this.image,-40,-40,this.width,this.height);
      //imageMode(RADIUS)

      pop();
    }
  };