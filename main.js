var canvas = document.getElementById('canvas');
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
  '#192BC2',
  '#192BC2',
  '#ffed4b',
  '#ffed4b',
]
window.addEventListener('mousemove', function(event){
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
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

    if (mouse.x - this.x < 100 && mouse.x - this.x > -100 && mouse.y - this.y < 100 && mouse.y - this.y > -100) {
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

for (var i = 0; i < 500; i++) {
  var size = Math.random() * 1 + 1;
  var x = Math.random() * (innerWidth - size * 20) + size;
  var y = Math.random() * (innerHeight - size * 20) + size;
  var dx = (Math.random() - 1) * 10;
  var dy = (Math.random() - 1) * 10;


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

$("body").mousemove(function(e){
  let width = window.innerWidth;
  let height = window.innerHeight;
  let mouseX = e.pageX - width/2;
  let mouseY = e.pageY + height/2
  let movingDelay = new TimelineMax();
  movingDelay.add([
    TweenMax.to("h1", 1, {x: 0.03*mouseX, y: 0.03*mouseY, ease: Power2.easeOut}),
  ]);

});
