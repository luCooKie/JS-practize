window.onload = function () {
    document.onselectstart = new Function("event.returnValue = false;");
    var isDown = false;
    var contact;
    g("right").onmousedown = function () {
        isDown = true;
        contact = "right";
    }
    g("up").onmousedown = function () {
        isDown = true;
        contact = "up";
    }
    g("left").onmousedown = function () {
        isDown = true;
        contact = "left";
    }
    g("down").onmousedown = function () {
        isDown = true;
        contact = "down";
    }
    g("left-up").onmousedown = function () {
        isDown = true;
        contact = "left-up";
    }
    g("right-up").onmousedown = function () {
        isDown = true;
        contact = "right-up";
    }
    g("right-down").onmousedown = function () {
        isDown = true;
        contact = "right-down";
    }
    g("left-down").onmousedown = function () {
        isDown = true;
        contact = "left-down";
    }


//鼠标移动事件
    window.onmousemove = function (e) {
        if (isDown) {
            switch (contact) {
                case"right":
                    rightMove(e);
                    break;
                case"up":
                    upMove(e);
                    break;
                case"left":
                    leftMove(e);
                    break;
                case"down":
                    downMove(e);
                    break;
                case"left-up":
                    leftMove(e);
                    upMove(e);
                    break;
                case"right-up":
                    rightMove(e);
                    upMove(e);
                    break;
                case"right-down":
                    rightMove(e);
                    downMove(e);
                    break;
                case"left-down":
                    leftMove(e);
                    downMove(e);
                    break;
            }
        }
        setChoice();
    }

    window.onmouseup = function () {
        isDown = false;
    }
    function rightMove(e) {
        var x = e.clientX;
        var widthBefore = g("main").offsetWidth - 2;
        var addWidth = x - getPosition(g("main")).left - widthBefore;
        g("main").style.width = widthBefore + addWidth + "px";
    }

    function upMove(e) {
        var y = e.clientY;
        var HeightBefore = g("main").offsetHeight - 2;
        var addHeight = getPosition(g("main")).top - y;
        g("main").style.height = HeightBefore + addHeight + "px";
        g("main").style.top = g("main").offsetTop - addHeight + "px";
    }

    function leftMove(e) {
        var x = e.clientX;
        var widthBefore = g("main").offsetWidth - 2;
        var addWidth = getPosition(g("main")).left - x;
        g("main").style.width = widthBefore + addWidth + "px";
        g("main").style.left = g("main").offsetLeft - addWidth + "px";
    }

    function downMove(e) {
        var y = e.clientY;
        var HeightBefore = g("main").offsetHeight - 2;
        var addHeight = y - getPosition(g("main")).top - HeightBefore;
        g("main").style.height = HeightBefore + addHeight + "px";
    }
}


function g(className) {
    return document.getElementsByClassName(className)[0];
}
//获取元素相对于屏幕左边的距离
function getPosition(node) {
    var left = node.offsetLeft;
    var top = node.offsetTop;
    var parent = node.offsetParent;
    while (parent) {
        left += parent.offsetLeft;
        top += parent.offsetTop;
        parent = parent.offsetParent;
    }
    return {"left": left, "top": top};
}
//设置选取区域高亮可见
function setChoice() {
    var top = g("main").offsetTop;
    var right = g("main").offsetLeft + g("main").offsetWidth;
    var left = g("main").offsetLeft;
    var bottom = g("main").offsetTop + g("main").offsetHeight;
    g("img2").style.clip = "rect(" + top + "px," + right + "px," + bottom + "px," + left + "px)";
}
