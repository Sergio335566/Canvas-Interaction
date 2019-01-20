var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');



function Rect(x, y, dx, dy, size){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.size = size;
  this.draw = function(){
    c.beginPath();
    c.fillRect(this.x, this.y, this.size, this.size);
    c.strokeStyle = 'red';
    c.stroke();
  }
  this.update = function() {
    if (this.x + size > innerWidth || this.x - this.size < 0) {
      this.dx = -this.dx;
    }
    if (this.y + size > innerHeight || this.y - this.size < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

// var x = Math.random() * window.innerWidth;
// var y = Math.random() * window.innerHeight;
// var dx = (Math.random() - 0.8) * 10;
// var dy = (Math.random() - 0.8) * 10;
// var size = 50;

var rectangle = new Rect(200, 200, 4, 4, 30);



function animate(){
  requestAnimationFrame(animate);
  // for (var i = 0; i < 50; i++) {
    c.clearRect(0, 0, innerWidth, innerHeight);
    rectangle.update();

  // }
}
animate();
