export default function purpleRain (p) {
  let rainDrops = []
  const NUM_DROPS = 200

  p.setup = function () {
    p.createCanvas(window.innerWidth/4, window.innerHeight - 200)
    p.canvas.style.zIndex = '-1'
    p.canvas.style.position = 'absolute'
    createDrops()
  }

  function createDrops() {
    for (var i = 0; i < NUM_DROPS; i++) {
      rainDrops[i] = new RainDrop(getRandomFloat(-p.windowWidth/2, p.windowWidth/2),
                                  getRandomFloat(3 * -p.windowHeight, -p.windowHeight/2 - 1),
                                  getRandomFloat(4, 6))
    }
  }

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    // Called if the wrapper props change
  }

  p.draw = function () {
    p.background(208, 202, 209)
    for (var i = 0; i < rainDrops.length; i++) {
      rainDrops[i].fall()
      rainDrops[i].show()
    }
  }

  class RainDrop {
    constructor(x, y, distance) {
      this.x = x
      this.y = y
      this.length = (distance/2) * 10
      this.fallSpeed = distance
    }

    fall() {
      if (this.y + this.fallSpeed > p.windowHeight/2 + 50) {
        this.y = getRandomFloat(3 * -p.windowHeight, -p.windowHeight/2 - 1)
      } else {
        this.y = this.y + this.fallSpeed
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
