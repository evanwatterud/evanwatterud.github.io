export default function particles (p) {
  var system;

  p.setup = function() {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.canvas.style.zIndex = '-1'
    p.canvas.style.position = 'absolute'
    system = new ParticleSystem(p.createVector(p.width/2, 50));
  }

  p.draw = function() {
    p.background(51);
    system.addParticle();
    system.run();
  }

  // A simple Particle class
  var Particle = function(position) {
    this.acceleration = p.createVector(0, 0.05);
    this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 0));
    this.position = position.copy();
    this.lifespan = 255.0;
  };

  Particle.prototype.run = function() {
    this.update();
    this.display();
  };

  // Method to update position
  Particle.prototype.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  };

  // Method to display
  Particle.prototype.display = function() {
    p.stroke(200, this.lifespan);
    p.strokeWeight(2);
    p.fill(127, this.lifespan);
    p.ellipse(this.position.x, this.position.y, 12, 12);
  };

  // Is the particle still useful?
  Particle.prototype.isDead = function(){
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  };

  var ParticleSystem = function(position) {
    this.origin = position.copy();
    this.particles = [];
  };

  ParticleSystem.prototype.addParticle = function() {
    this.particles.push(new Particle(this.origin));
  };

  ParticleSystem.prototype.run = function() {
    for (var i = this.particles.length-1; i >= 0; i--) {
      var par = this.particles[i];
      par.run();
      if (par.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}
