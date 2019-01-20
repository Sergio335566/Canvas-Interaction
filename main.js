var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

var mouse = {
  x: undefined,
  y: undefined
}
var maxSize = 70;
// var minSize = 2;

var colorArray = [
  '#031926',
  '#56445D',
  '#77ACA2',
  '#9DBEBB',
  '#F4E9CD',
]
window.addEventListener('mousemove', function(event){
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse);
})

function Rect(x, y, dx, dy, size){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.minSize = size;
  this.size = size;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function(){
    c.beginPath();
    c.fillRect(this.x, this.y, this.size, this.size);
    c.strokeStyle = 'red';
    c.stroke();
    c.fillStyle = this.color;
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

    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.size < maxSize) {
      this.size += 1;
      }
    } else if (this.size > this.minSize) {
      this.size -= 1;
    }

    this.draw();
  }
}



var rectangleArray = [];

for (var i = 0; i < 1000; i++) {
  var size = Math.random() * 5 + 1;
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
