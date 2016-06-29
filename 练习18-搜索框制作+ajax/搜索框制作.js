$("#btn-text").bind("keyup", function () {
    var searchText = $(this).val();
    var callback = function (date) {
        var d = date.AS.Results[0].Suggests;
        var html = "";
        for (var i = 0; i < d.length; i++) {
            html += "<li><a>" + d[i].Txt + "</a><li>";
        }
        $("#search-list").html(html);
        $("#search-list").show().css({
            position: "absolute",
            left: $('#formbox').offset().left,
            top: $('#formbox').offset().top + $("#btn-submit").height()
        });
    };
    $.ajax({
        type: "get",
        async: false,
        url: "http://api.bing.com/qsonhs.aspx?type=cb&cb=callback&q=" + searchText,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "callback",
        success: function (data) {
            callback(data);
        },
        error: function (data) {
            console.log(data);
        }
    });
});
$(document).bind("click", function () {
    $("#search-list").hide();
})
$("#search-list").delegate("li", "click", function () {
    var keyword = $(this).text();
    location.href = "http://cn.bing.com/search?q=" + keyword;
});