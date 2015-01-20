( function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (obj) {
    var vel = Asteroids.Util.randomVec(1)
    Asteroids.MovingObject.call(this, { game: obj.game, pos: obj.pos, vel: vel, color: Asteroid.COLOR, radius: Asteroid.RADIUS})
  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject)

  Asteroid.prototype.isCollidedWith =  function (otherObject) {
    var radiusSum = this.radius + otherObject.radius
    var xDistance = Math.pow(this.pos[0] - otherObject.pos[0], 2)
    var yDistance = Math.pow(this.pos[1] - otherObject.pos[1], 2)
    var distance = Math.sqrt(xDistance + yDistance)
    if (distance < radiusSum && otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  }

  Asteroid.COLOR = "blue"
  Asteroid.RADIUS = 15

})();
