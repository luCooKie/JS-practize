$(function () {
    $("#menuList").on("click", "a", function () {
        if ($(this).hasClass("btn-active")) {
            $("#closeBtn").click();
        }
        var curIndex = $(this).index();
        var distance = "-" + curIndex * 100 + "%";
        if ($("#expandZone").hasClass("active")) {
            $("#expandZone .expdiv").css({marginLeft: distance});
        } else {
            $("#expandZone").animate({height: "130px"}).addClass("active");
            $("#expandZone .expdiv").css({marginLeft: distance});
        }
        $(this).addClass("btn-active").siblings().removeClass("btn-active");
    })
    $("#closeBtn").on("click", function () {
        $("#expandZone").animate({height: "0px"}, function () {
            $(this).removeClass("active");
            $("#menuList .btn-active").removeClass("btn-active");
        })
    })
});

