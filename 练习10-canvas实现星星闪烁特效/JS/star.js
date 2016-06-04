var starObj = function () {
    this.x;
    this.y;
    this.picNo;
    this.timer;
    this.xSpd;
    this.ySpd;
}
starObj.prototype.init = function () {
    this.x = Math.random() * 1200 + 100;//Math.random()返回[0,1)
    this.y = Math.random() * 600 + 100;
    this.picNo = Math.floor(Math.random() * 7);
    this.timer = 0;
    this.xSpd = Math.random() * 3 - 1.5; //[-1.5,1.5)
    this.ySpd = Math.random() * 3 - 1.5;

}
starObj.prototype.update = function () {
    this.x += this.xSpd * deltaTime * 0.004;
    this.y += this.ySpd * deltaTime * 0.004;
    //this.x 超过范围 init
    if (this.x < 100 || this.x > 1300) {
        this.init();
        return;
    }
    //this.y 超过范围 init
    if (this.y < 100 || this.y > 700) {
        this.init();
        return;
    }
    this.timer += deltaTime;
    if (this.timer > 60) {
        this.picNo += 1;
        this.picNo %= 7;
        this.timer = 0;
    }
}
starObj.prototype.draw = function () {
    //save()
    ctx.save();
    //globalAlpha全局透明度
    ctx.globalAlpha = life;
    //drawImage(img,sx,sy,swidth,sheight,x,y,width,height)
    ctx.drawImage(starPic, this.picNo * 7, 0, 7, 7, this.x, this.y, 12, 12);
    //restore()
    ctx.restore();
}

function drawStars() {
    for (var i = 0; i < num; i++) {
        stars[i].update();
        stars[i].draw();
    }
}

function aliveUpdate() {
    if (switchy) {
        //show stars
        life += 0.03 * deltaTime * 0.05;
        if (life > 1) {
            life = 1;
        }
    } else {
        //hide stars
        life -= 0.03 * deltaTime * 0.05;
        if (life < 0) {
            life = 0;
        }
    }
}