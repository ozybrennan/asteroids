( function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function (obj) {
    this.pos = obj.pos
    this.vel = obj.vel
    this.radius = obj.radius
    this.color = obj.color
    this.game = obj.game
    this.isWrappable = true
  };

  MovingObject.prototype.draw = function (ctx) {

    ctx.beginPath();
    ctx.fillStyle = this.color;

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function () {
    var x = this.pos[0] + this.vel[0]
    var y = this.pos[1] + this.vel[1]
    if (this.game.isOutOfBounds(x, y)) {
      if (this.isWrappable) {
        this.pos = this.game.wrap([x, y])
      } else {
        this.game.remove(this)
      }
    } else {
      this.pos = [x, y]
    }
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {

  };

})();
