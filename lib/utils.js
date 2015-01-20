( function () {
  if (typeof Util === "undefined") {
    window.Asteroids.Util = {};
  }

  Asteroids.Util.inherits = function (child, parent) {
    function Surrogate () {};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
  };

  Asteroids.Util.randomVec = function (length) {
    var dirs = [-1, 0, 1];
    var vec = []
    for (var i = 0; i < 2; i++) {
      // generates random number 0, 1, or 2 with equal chance of each
      var rand = Math.floor(Math.random() * 3)
      vec.push(length * dirs[rand])
    }
    if (vec.join() === [0,0].join()) {
        return this.randomVec()
    } else {
      return vec
    }
  }

})();
