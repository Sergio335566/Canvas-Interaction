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



var rectangleArray = [];

for (var i = 0; i < 50; i++) {
  var size = 50;
  var x = Math.random() * (innerWidth - size * 2) + size;
  var y = Math.random() * (innerHeight - size * 2) + size;
  var dx = (Math.random() - 0.8) * 10;
  var dy = (Math.random() - 0.8) * 10;


  rectangleArray.push(new Rect(x, y, dx, dy, size));
  }

function animate(){
  requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < rectangleArray.length; i++) {
      rectangleArray[i].update();

    }
}
animate();
