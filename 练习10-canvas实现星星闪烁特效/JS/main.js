var can;
var ctx;
var w;
var h;
var girlPic = new Image();
var starPic = new Image();

var num = 100;
var stars = [];

var lastTime;
var deltaTime;

var switchy = false;
var life = 0;

window.onload = function init() {
    can = document.getElementById("canvas");
    ctx = can.getContext("2d");

    w = can.width;
    h = can.height;

    document.addEventListener("mousemove", mousemove, false);

    girlPic.src = "SRC/girl.jpg";
    starPic.src = "SRC/star.png";

    for (var i = 0; i < num; i++) {
        stars[i] = new starObj();
        stars[i].init();
    }

    lastTime = Date.now();

    gameloop();
}
function gameloop() {
    window.requestAnimFrame(gameloop);

    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;

    drawBackground();
    drawGirl();
    drawStars();
    aliveUpdate();
}
function drawBackground() {
    ctx.fillStyle = "#393550";
    ctx.fillRect(0, 0, w, h);
}
function drawGirl() {
    //drawImage(img,x,y,width,height)
    //x轴坐标正方向向右,y轴坐标正方向向下,(0.0)在canvas左上角
    ctx.drawImage(girlPic, 100, 100, 1200, 600);
}

function mousemove(e) {
    if (e.offsetX || e.layerX) {
        var px = e.offsetX = undefined ? e.layerX : e.offsetX;
        var py = e.offsetY = undefined ? e.layerY : e.offsetY;

        //out switchy = false;in switchy = true;
        //px在范围内&&py在范围内
        if (px > 100 && px < 1300 && py > 100 && py < 700) {
            switchy = true;
        } else {
            switchy = false;
        }
    }
}