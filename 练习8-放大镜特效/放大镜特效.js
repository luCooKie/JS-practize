window.onload = function () {
    var box = document.getElementsByClassName("box")[0];
    var small = box.getElementsByClassName("small")[0];
    var mark = small.getElementsByClassName("mark")[0];
    var glass = small.getElementsByClassName("glass")[0];
    var big = box.getElementsByClassName("big")[0];
    var img = big.getElementsByTagName("img")[0];

    mark.onmouseover = function () {
        glass.style.display = "block";
        big.style.display = "block";
    }
    mark.onmouseout = function () {
        glass.style.display = "none";
        big.style.display = "none";
    }
    mark.onmousemove = function (ev) {
        var event = ev || window.event;
        var left = event.clientX - box.offsetLeft - small.offsetLeft - glass.offsetWidth / 2;
        var top = event.clientY - box.offsetTop - small.offsetTop - glass.offsetHeight / 2;

        if (left < 0) {
            left = 0;
        } else if (left > (mark.offsetWidth - glass.offsetWidth)) {
            left = mark.offsetWidth - glass.offsetWidth;
        }

        if (top < 0) {
            top = 0;
        } else if (top > (mark.offsetHeight - glass.offsetHeight)) {
            top = mark.offsetHeight - glass.offsetHeight;
        }
        glass.style.left = left + "px";
        glass.style.top = top + "px";

        // var perX = left / (mark.offsetWidth - glass.offsetWidth);
        // var perY = top / (mark.offsetHeight - glass.offsetHeight);
        // img.style.left = -perX * (img.offsetWidth - big.offsetWidth) + "px";
        // img.style.top = -perY * (img.offsetHeight - big.offsetHeight) + "px";
        var per = big.offsetWidth / glass.offsetWidth;
        img.style.left = -per * left + "px";
        img.style.top = -per * top + "px";
    }
}
