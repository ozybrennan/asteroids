( function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function (obj) {
    var vel = [obj.vel[0] * 2, obj.vel[1] * 2]
    Asteroids.MovingObject.call(this, { game: obj.game, pos: obj.pos, vel: vel, color: Bullet.COLOR, radius: Bullet.RADIUS})
    this.isWrappable = false
  };

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject)

  Bullet.COLOR = "red"
  Bullet.RADIUS = 5

  Bullet.prototype.isCollidedWith =  function (otherObject) {
    var radiusSum = this.radius + otherObject.radius
    var xDistance = Math.pow(this.pos[0] - otherObject.pos[0], 2)
    var yDistance = Math.pow(this.pos[1] - otherObject.pos[1], 2)
    var distance = Math.sqrt(xDistance + yDistance)
    if (distance < radiusSum && !(otherObject instanceof Asteroids.Ship)) {
      this.game.remove(this);
      this.game.remove(otherObject);
    }
  }

})();
