var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

for (var i = 0; i < 50; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  c.fillRect(x, y, 100, 100);
  c.strokeStyle = 'red';
  c.stroke();
}
