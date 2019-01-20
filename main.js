var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

var x = Math.random() * window.innerWidth;
var y = Math.random() * window.innerHeight;
var dx = (Math.random() - 0.8) * 10;
var dy = (Math.random() - 0.8) * 10;
var size = 50;

function animate(){
  requestAnimationFrame(animate);
  // for (var i = 0; i < 50; i++) {
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.fillRect(x, y, size, size);
    c.strokeStyle = 'red';
    c.stroke();
    if (x + size > innerWidth || x - size < 0) {
      dx = -dx;
    }
    if (y + size > innerHeight || y - size < 0) {
      dy = -dy;
    }
    x += dx;
    y += dy;
  // }
}
animate();
