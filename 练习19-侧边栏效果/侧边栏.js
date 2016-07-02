(function () {

    function Menubar() {
        this.el = document.querySelector("#sidebar ul");
        this.state = "allClosed";
        this.el.addEventListener("click", function (e) {
            e.stopPropagation();
        })
        var This = this;
        this.menuContentEl = null;
        this.currentOpenedMenuContent = null;
        this.menuList = document.querySelectorAll("#sidebar ul>li");
        for (var i = 0; i < this.menuList.length; i++) {
            this.menuList[i].addEventListener("click", function (e) {
                var menuContentEl = document.getElementById(e.currentTarget.id + "-content");
                if (This.state === "allClosed") {
                    menuContentEl.style.top = "0";
                    menuContentEl.style.left = "-85px";
                    menuContentEl.className = "nav-content";
                    menuContentEl.classList.add("menuContent-move-right");
                    This.state = "hasOpened";
                    This.currentOpenedMenuContent = menuContentEl;
                } else {
                    This.currentOpenedMenuContent.className = "nav-content";
                    This.currentOpenedMenuContent.style.top = "0";
                    This.currentOpenedMenuContent.style.left = "35px";
                    This.currentOpenedMenuContent.classList.add("menuContent-move-left");
                    menuContentEl.className = "nav-content";
                    menuContentEl.style.top = "250px";
                    menuContentEl.style.left = "35px";
                    menuContentEl.classList.add("menuContent-move-up");
                    This.state = "hasOpened";
                    This.currentOpenedMenuContent = menuContentEl;
                }
            })
        }
        this.menuContentList = document.querySelectorAll(".nav-content >div.nav-con-close");
        for (var i = 0; i < this.menuContentList.length; i++) {
            this.menuContentList[i].addEventListener("click", function (e) {
                var menuContent = e.currentTarget.parentNode;
                menuContent.className = "nav-content";
                menuContent.style.top = "0";
                menuContent.style.left = "35px";
                menuContent.classList.add("menuContent-move-left");
                This.state = "allClosed";
            })
        }
    }

    function Sidebar(eId, closeBarId) {
        this.state = "opened";
        this.el = document.getElementById(eId || "sidebar");
        this.closeBarEl = document.getElementById(closeBarId || "closeBar");
        this.menubar = new Menubar();
        var This = this;
        this.el.addEventListener("click", function (event) {
            if (event.target !== This.el) {
                This.triggerSwich();
            }
        })
    }

    Sidebar.prototype.close = function () {
        this.el.className = "sidebar-move-left";
        this.closeBarEl.className = "closeBar-move-right";
        this.state = "closed";
        // if(this.state === "closed"){
        //     if(this.menubar.currentOpenedMenuContent){
        //         this.menubar.currentOpenedMenuContent.classList.add("menuContent-move-left");
        //     }else if(this.menubar.menuContentEl){
        //         this.menubar.menuContentEl.classList.add("menuContent-move-left");
        //     }
        // }
    }
    Sidebar.prototype.open = function () {
        this.el.style.left = "-120px";
        this.el.className = "sidebar-move-right";
        this.closeBarEl.style.left = "160px";
        this.closeBarEl.className = "closeBar-move-left";
        this.state = "opened";
    }
    Sidebar.prototype.triggerSwich = function () {
        if (this.state === "opened") {
            this.close();
        } else {
            this.open();
        }
    }
    var sidebar = new Sidebar();


})();