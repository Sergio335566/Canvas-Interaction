var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var rect = canvas.getContext('2d');

rect.fillRect(100, 100, 100, 100);
console.log(canvas)
