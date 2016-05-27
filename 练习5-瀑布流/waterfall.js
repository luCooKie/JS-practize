$(window).on("load", function () {
    waterfall();
    var dataInt = {"data": [{"src": "0.jpg"}, {"src": "1.jpg"}, {"src": "2.jpg"}, {"src": "3.jpg"}, {"src": "4.jpg"}]};
    $(window).on("scroll", function () {
        if (checkScrollSlide) {
            $.each(dataInt.data, function (key, value) {
                var oBlock = $("<div>").addClass("block").appendTo($("#main"));
                var oBox = $("<div>").addClass("box").appendTo($(oBlock));
                $("<img>").attr("src", "img/" + $(value).attr("src")).appendTo($(oBox));
                waterfall();
            })
        }
    })
})
function waterfall() {
    var $blocks = $("#main>div");
    var w = $blocks.eq(0).outerWidth();//得到block的宽度
    var cols = Math.floor($(window).width() / w);//列数 = 屏幕宽度/block宽度
    $("#main").width(w * cols).css("margin", "0 auto"); //设定#main的div宽度+位置居中
    var hArr = []; //新数组存储各个block高度
    $blocks.each(function (index, value) {
        var h = $blocks.eq(index).outerHeight();
        if (index < cols) {
            hArr[index] = h;
        } else {
            var minH = Math.min.apply(null, hArr);
            var minHindex = $.inArray(minH, hArr);
            $(value).css({
                "position": "absolute",
                "top": minH + "px",
                "left": minHindex * w + "px"
            })
            hArr[minHindex] += $blocks.eq(index).outerHeight();
        }
    })
}
function checkScrollSlide() { //懒加载
    var $lastBox = $("#main>div").last();
    var lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.outerHeight() / 2);
    var scrollTop = $(window).scrollTop();
    var documentH = $(window).height();
    return (lastBoxDis < scrollTop + documentH) ? true : false;
}