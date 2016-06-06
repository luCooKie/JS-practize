function $(id) {
    return typeof id === "string" ? document.getElementById(id) : id;
}
window.onload = function () {
    tab1();
    tab2();
    tab3();
}
//Tab普通切换
function tab1() {
    var titles = $("notice-title").getElementsByTagName("li");
    var divs = $("notice-content").getElementsByTagName("div");
    if (titles.length !== divs.length)
        return;
    for (var i = 0; i < titles.length; i++) {
        titles[i].index = i;
        titles[i].onclick = function () {
            for (var j = 0; j < titles.length; j++) {
                titles[j].className = "";
                divs[j].style.display = "none";
            }
            this.className = "selected";
            divs[this.index].style.display = "block";
        }
    }
}
//Tab延迟切换
function tab2() {
    var titles = $("notice2-title").getElementsByTagName("li");
    var divs = $("notice2-content").getElementsByTagName("div");
    var timer;
    if (titles.length !== divs.length)
        return;
    for (var i = 0; i < titles.length; i++) {
        titles[i].index = i;
        titles[i].onmouseover = function () {
            var that = this;
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                for (var j = 0; j < titles.length; j++) {
                    titles[j].className = "";
                    divs[j].style.display = "none";
                }
                that.className = "selected";
                divs[that.index].style.display = "block";
            }, 400);
        }
    }
}
//Tab自动切换
function tab3() {
    var titles = $("notice3-title").getElementsByTagName("li");
    var divs = $("notice3-content").getElementsByTagName("div");
    var index = 0;
    var timer;
    for (var i = 0; i < titles.length; i++) {
        titles[i].index = i;
        titles[i].onmouseover = function () {
            clearInterval(timer);
            change(this.index);
        }
        titles[i].onmouseout = function () {
            timer = setInterval(autoPlay, 2000);
        }
    }
    if (timer) {
        clearTimeout(timer);
    }
    timer = setInterval(autoPlay, 2000);
    function autoPlay() {
        index++;
        if (index >= titles.length) {
            index = 0;
        }
        change(index);
    }

    function change(curIndex) {
        for (var j = 0; j < titles.length; j++) {
            titles[j].className = "";
            divs[j].style.display = "none";
        }
        titles[curIndex].className = "selected";
        divs[curIndex].style.display = "block";
        index = curIndex;
    }
}

