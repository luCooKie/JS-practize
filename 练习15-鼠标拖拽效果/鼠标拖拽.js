// 获取元素对象
function g(id) {
    return document.getElementById(id);
}
// 自动居中函数 - 登录浮层
function autoCenter(el) {
    var bodyX = document.documentElement.clientWidth;
    var bodyY = document.documentElement.clientHeight;
    var elX = el.offsetWidth;
    var elY = el.offsetHeight;
    el.style.left = (bodyX - elX) / 2 + "px";
    el.style.top = (bodyY - elY) / 2 + "px";
}
// 自动全屏 - 遮罩
function fillToBody(el) {
    el.style.width = document.documentElement.clientWidth + "px";
    el.style.height = document.documentElement.clientHeight + "px";
}
var mouseOffsetX = 0;
var mouseOffsetY = 0;
var isDragging = false;
// 鼠标事件1 - 在标题栏上按下(要计算鼠标相对拖拽元素的左上角的坐标,并标记元素为可拖动)
g("drag-title").addEventListener("mousedown", function (e) {
    var e = e || window.event;
    mouseOffsetX = e.pageX - g("drag").offsetLeft;
    mouseOffsetY = e.pageY - g("drag").offsetTop;
    isDragging = true;
})
// 鼠标事件2 - 鼠标移动时(要检测,元素是否可标记为移动,如果是,则更新元素的位置,到当前鼠标的位置【减去第一个的偏移】)
document.onmousemove = function (e) {
    var e = e || window.event;
    var mouseX = e.pageX; //鼠标当前的位置
    var mouseY = e.pageY;
    var moveX = 0; //浮层元素的新位置
    var moveY = 0;
    if (isDragging) {
        moveX = mouseX - mouseOffsetX;
        moveY = mouseY - mouseOffsetY;
        if (moveX < 0) {
            moveX = 0;
        } else if (moveX > (document.documentElement.clientWidth - g("drag").offsetWidth)) {
            moveX = document.documentElement.clientWidth - g("drag").offsetWidth;
        }
        if (moveY < 0) {
            moveY = 0;
        } else if (moveY > (document.documentElement.clientHeight - g("drag").offsetHeight)) {
            moveY = document.documentElement.clientHeight - g("drag").offsetHeight;
        }
        g("drag").style.left = moveX + "px";
        g("drag").style.top = moveY + "px";
    }
}
// 鼠标事件3 - 鼠标松开的时候(标记元素为不可拖动)
document.onmouseup = function () {
    isDragging = false;
}
//展现登录浮层
function showDrag() {
    g("drag").style.display = "block";
    g("mask").style.display = "block";
    autoCenter(g("drag"));
    fillToBody(g("mask"));
}
//隐藏登录浮层
function hideDrag() {
    g("drag").style.display = "none";
    g("mask").style.display = "none";
}
g("login-in").onclick = showDrag;
g("close-btn").onclick = hideDrag;

window.onresize = function () {
    autoCenter(g("drag"));
    fillToBody(g("mask"));
}
    
