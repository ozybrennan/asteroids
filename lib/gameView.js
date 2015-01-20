(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (canvasEl) {
    this.game = new Asteroids.Game();
    this.ctx = canvasEl;
  };

  GameView.prototype.start = function () {
    this.bindKeyHandlers()
    window.setInterval((function () {
      this.game.draw(this.ctx);
      this.game.step();
    }).bind(this), 20)
  }

  GameView.prototype.bindKeyHandlers = function () {
    key('up', this.game.ship.power.bind(this.game.ship, [0, -1]))
    key('down', this.game.ship.power.bind(this.game.ship, [0, 1]))
    key('left', this.game.ship.power.bind(this.game.ship, [-1, 0]))
    key('right', this.game.ship.power.bind(this.game.ship, [1, 0]))
    key('space', this.game.ship.fireBullet.bind(this.game.ship))
  }

})();
