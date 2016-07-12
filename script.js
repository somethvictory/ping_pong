leftBar = {
  x: 0,
  y: 30,
  width: 3,
  height: 90,
  draw: function() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};

rightBar = {
  x: 297,
  y: 30,
  width: 3,
  height: 90,
  draw: function() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};

ball = {
  x: 0,
  y: 75,
  width: 3,
  height: 2,
  direction: 'R',
  update: function() {
    if(this.direction == 'R') {
      this.x += 5;
      if(this.x >= rightBar.x) {
        this.direction = 'L';
      }
    }
    else {
      this.x -= 5;
      if(0 > this.x) {
        this.direction = 'R';
      }
    }
  },

  draw: function() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};

init();

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  draw();

  var recursive = function() {
    update();
    draw();
    window.requestAnimationFrame(recursive, canvas)
  }

  window.requestAnimationFrame(recursive, canvas)
}

function draw() {
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.save();
  ctx.fillStyle = 'green';

  leftBar.draw();
  rightBar.draw();
  ball.draw();

  ctx.restore();
}

function update() {
  ball.update();
}