(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function () {
    this.asteroids = this.addAsteroids();
    this.ship = new Asteroids.Ship( { game: this, pos: this.randomPosition()})
    this.bullets = [];
  };

  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  Game.NUM_ASTEROIDS = 5;

  Game.prototype.addAsteroids = function () {
    var asteroids = []
    for(var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      asteroids.push(new Asteroids.Asteroid( { game: this, pos: this.randomPosition() } ))
    };
    return asteroids;
  }

  Game.prototype.randomPosition = function () {
    var x = Math.floor(Math.random() * Game.DIM_X) + 1;
    var y = Math.floor(Math.random() * Game.DIM_Y) + 1;
    return [x, y];
  }

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach(function (obj) {
      obj.draw(ctx);
    });
  }

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  }

  Game.prototype.moveObjects = function () {
    this.allObjects().forEach(function (obj) {
      obj.move();
    });
  }

  Game.prototype.wrap = function (pos) {
    var x = pos[0];
    var y = pos[1];
    console.log([x, y])
    var final_x = this.resetPos(x, Game.DIM_X);
    var final_y = this.resetPos(y, Game.DIM_Y);

    return [final_x, final_y]
  }

  Game.prototype.resetPos = function (coord, max) {
    if (coord < 0) {
      return max;
    } else if (coord > max){
      return 0;
    } else {
      return coord;
    }
  };

  Game.prototype.checkCollisions = function () {
    var objects = this.allObjects();
    for (var i = 0; i < objects.length; i++) {
      for (var j = i + 1; j < objects.length; j++) {
        objects[i].isCollidedWith(objects[j])
      };
    };
  };

  Game.prototype.remove = function (object) {
    for (var i = 0; i < this.asteroids.length; i++) {
      if (object === this.asteroids[i]) {
        this.asteroids.splice(i, i + 1)
      }
    }

    for (var i = 0; i < this.bullets.length; i++) {
      if (object === this.bullets[i]) {
        this.bullets.splice(i, i + 1)
      }
    }
  }

  Game.prototype.add = function (obj) {
    if (obj instanceof Asteroids.Bullet) {
      this.bullets.push(obj)
    } else if (obj instanceof Asteroids.Asteroid) {
      this.asteroids.push(obj)
    }
  }

  Game.prototype.allObjects = function () {
    return this.bullets.concat(this.asteroids).concat([this.ship])
  }

  Game.prototype.isOutOfBounds = function (x, y) {

    if (x >= 0 && x <= Game.DIM_X && y >= 0 && y <= Game.DIM_Y) {
      return false;
    } else {
      return true;
    }
  }

})();
