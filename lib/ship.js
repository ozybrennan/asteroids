( function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function (obj) {
    var vel = [0,0]
    Asteroids.MovingObject.call(this, { game: obj.game, pos: obj.pos, vel: vel, color: Ship.COLOR, radius: Ship.RADIUS})
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject)

  Ship.COLOR = "gray"
  Ship.RADIUS = 10

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
    this.game.bullets = [];
  }

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }

  Ship.prototype.fireBullet = function () {
    var bullet = new Asteroids.Bullet( { game: this.game, vel: this.vel, pos: this.pos } )
    this.game.add(bullet)
  }

})();
