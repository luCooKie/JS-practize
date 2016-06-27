window.onload = function () {
    var box1 = new Box("box1");
    box1.init();
    var box2 = new Box("box2");
    box2.init();
}
function Box(id) {
    this.box = document.getElementById(id);
    this.img = this.box.getElementsByTagName("img")[0];
    this.leftDiv = this.box.getElementsByTagName("div")[0];
    this.rightDiv = this.box.getElementsByTagName("div")[1];
    this.timer = null;
    this.maxWidth = this.img.offsetWidth * 2; //放大的极限值
    this.minWidth = this.img.offsetWidth * 0.45; //缩小的极限值
}
Box.prototype.init = function () {
    var This = this;
    this.autoCenter();
    this.leftDiv.onclick = function () {
        This.max();
    }
    this.rightDiv.onclick = function () {
        This.min();
    }
}
Box.prototype.max = function () {
    var This = this;
    var endWidth = this.img.offsetWidth * 1.2;
    This.timer = setInterval(maxPlay, 30);
    function maxPlay() {
        if (This.img.offsetWidth < endWidth) {
            if (This.img.offsetWidth < This.maxWidth) {
                This.img.style.width = This.img.offsetWidth * 1.04 + "px";
                This.img.style.height = This.img.offsetHeight * 1.04 + "px";
                This.autoCenter();
            } else {
                clearInterval(This.timer);
                alert("已经放大到最大值了");
            }
        } else {
            clearInterval(This.timer);
        }
    }
}
Box.prototype.min = function () {
    var This = this;
    var endWidth = this.img.offsetWidth * 0.8;
    This.timer = setInterval(minPlay, 30);
    function minPlay() {
        if (This.img.offsetWidth > endWidth) {
            if (This.img.offsetWidth > This.minWidth) {
                This.img.style.width = This.img.offsetWidth * 0.94 + "px";
                This.img.style.height = This.img.offsetHeight * 0.94 + "px";
                This.autoCenter();
            } else {
                clearInterval(This.timer);
                alert("已经缩小到最小值了");
            }
        } else {
            clearInterval(This.timer);
        }
    }
}
Box.prototype.autoCenter = function () {
    this.box.style.left = (document.body.clientWidth - this.box.offsetWidth ) / 2 + "px";
}



