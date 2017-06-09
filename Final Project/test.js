var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

var W = 1300,
    H = 450;

canvas.height = H;
canvas.width = W;

var ball = {},
    gravity = 0.2,
    bounceFactor = 0.7;

$('#update').click(function() {
    gravity = document.getElementById('grav').value;
    bounceFactor = document.getElementById('bounce').value;
    document.getElementById('setgrav').value = gravity;
    document.getElementById('setbounce').value = bounceFactor;
    update();
    setInterval(update, 1000 / 60);
});

ball = {
    x: 0,
    y: 0,
    radius: 15,
    color: "red",
    // Velocity components
    vx: 2,
    vy: 1,
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
};

function clearCanvas() {
    ctx.clearRect(0, 0, W, H);
}

function update() {
    clearCanvas();
    ball.draw();

    ball.y += ball.vy;
    ball.x += ball.vx;
    ball.vy += gravity;

    if (ball.y + ball.radius > H) {
        ball.y = H - ball.radius;
        ball.vy *= -bounceFactor;
    }
}

setInterval(update, 1000 / 60);/**
 * Created by gitret3396 on 5/31/2017.
 */
