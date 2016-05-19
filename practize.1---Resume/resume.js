!(function ($) {
    var $page = $(".page");
    //nav clicks
    $page.on("click", ">nav a", function (e) {
        e.preventDefault();
        var $a = $(this);
        var target = $a.attr("href");
        var $target = $(target);
        scrollTo($target);
    });
    //设置点击后的动画
    var $navList = $page.find("nav>ol>li");
    //拿到各个section距离页面顶部的高度
    var $sections = $page.find(">main>section");
    var sectionTopList = [];
    $.each($sections, function (index, section) {
        var top = $(section).offset().top;
        sectionTopList[index] = top;
    });
    $(window).on("scroll", function () {
        checkNav();
        addAnimation();
    });

    $page.on("click",">nav>img",function () {
        $(this).closest("nav").toggleClass("open");
    });
    $page.on("click",">nav>ol",function () {
        $(this).closest("nav").removeClass("open");
    });
    
    function getCurrentIndex() {
        var scrollTop = $("body").scrollTop();
        var eyePosition = scrollTop + $(window).height() / 2;
        var currentIndex = 0;
        for (var i = 0; i < sectionTopList.length; i++) {
            if (sectionTopList[i + 1] === undefined) {
                currentIndex = i;
                break;
            }
            if (eyePosition >= sectionTopList[i] && eyePosition <= sectionTopList[i + 1]) {
                currentIndex = i;
                break;
            }
        }
        return currentIndex;
    }

    function addAnimation() {
        var currentIndex = getCurrentIndex();
        $sections.eq(currentIndex).addClass("current").removeClass("leave")
            .siblings().removeClass("current").addClass("leave");
    }

    function checkNav() {
        var currentIndex = getCurrentIndex();
        $navList.eq(currentIndex).addClass("selected")
            .siblings().removeClass("selected");
    }

    function scrollTo(target) {
        var $target = $(target);
        $('html,body').animate({
            scrollTop: $target.offset().top
        }, 'fast');
    }
})(jQuery);