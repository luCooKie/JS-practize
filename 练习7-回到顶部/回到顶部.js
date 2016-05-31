window.onload = function () {
    var button = document.getElementById("button");
    var clientHeight = document.documentElement.clientHeight;
    var timer;
    var isTop = true;
    window.onscroll = function () {
        var oTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (oTop >= clientHeight) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
        if (!isTop) {
            clearInterval(timer);
        }
        isTop = false;
    }
    button.onclick = function () {
        timer = setInterval(function () {
            var oTop = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = Math.floor(-oTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = oTop + speed;
            isTop = true;
            if (oTop === 0) {
                clearInterval(timer);
            }
        }, 50)
    }
}