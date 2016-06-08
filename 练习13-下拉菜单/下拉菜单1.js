window.onload = function () {
    var nav1 = document.getElementById("nav1");
    var lists = nav1.getElementsByTagName("li");
    for (var i = 0; i < lists.length; i++) {
        lists[i].onmouseover = function () {
            var u = this.getElementsByTagName("ul")[0];
            if (u) {
                u.style.display = "block";
            }
        }
        lists[i].onmouseout = function () {
            var u = this.getElementsByTagName("ul")[0];
            if (u) {
                u.style.display = "none";
            }
        }
    }
}
