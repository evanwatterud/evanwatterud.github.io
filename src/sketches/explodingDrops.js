export default function explodingDrops (p) {
  let explodingDrops = []
  //let explosions = []
  const NUM_DROPS = 20

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)
    p.canvas.style.zIndex = '-1'
    p.canvas.style.position = 'absolute'
    p.frameRate(60)
    createDrops()
  }

  function createDrops() {
    for (var i = 0; i < NUM_DROPS; i++) {
      explodingDrops[i] = new ExplodingDrop(getRandomFloat(-p.windowWidth/2, p.windowWidth/2),
                                  getRandomFloat(3 * -p.windowHeight, -p.windowHeight/2 - 1),
                                  getRandomFloat(p.windowHeight/3, p.windowHeight))
    }
  }

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    // Called if the wrapper props change
  }

  p.draw = function () {
    p.background(208, 202, 209)
    for (var i = 0; i < explodingDrops.length; i++) {
      explodingDrops[i].fall()
      explodingDrops[i].show()
    }
    // for (var i = 0; i < explosions.length; i++) {
    //   explosions[i].show()
    // }
  }

  class Explosion {
    constructor(x, y) {

    }
  }

  class ExplodingDrop {
    constructor(x, y, explosionDistance) {
      this.x = x
      this.y = y
      this.length = 15
      this.explosionDistance = explosionDistance
      this.fallSpeed = 2
    }

    fall() {
      if (this.length + this.fallSpeed > this.explosionDistance) {
        this.length = 15
        this.y = getRandomFloat(3 * -p.windowHeight, -p.windowHeight/2 - 1)
      } else {
        this.length = this.length + this.fallSpeed
      }
    }

    show() {
      p.stroke(153, 0, 204)
      p.strokeWeight(2)
      p.line(this.x, this.y, this.x, this.y + this.length)
    }
  }
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
