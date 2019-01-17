let showOrHideNav = 0; //导航栏显示隐藏的参考值
let _$header; //导航的元素
let _$section; //主体内容元素
function gotoTop(min_height) {
    _$header = $("header");
    _$section = $("section");
    //预定义返回顶部的html代码，它的css样式默认为不显示
    var gotoTop_html = '<img id="gotoTop" src="images/back_top.png"/>';
    //将返回顶部的html代码插入页面上id为page的元素的末尾 
    $("body").append(gotoTop_html);
    $("#gotoTop").click( //定义返回顶部点击向上滚动的动画
        function() {
            $('html,body').animate({ scrollTop: 0 }, 700);
        });
    //获取页面的最小高度，无传入值则默认为600像素
    min_height ? min_height = min_height : min_height = 100;
    //为窗口的scroll事件绑定处理函数
    $(window).scroll(function() {
        //获取窗口的滚动条的垂直位置
        var s = $(window).scrollTop();
        //当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
        if (s > min_height) {
            $("#gotoTop").fadeIn(100);
        } else {
            $("#gotoTop").fadeOut(200);
        };
        navToggle(s, 0);

    });
};


//顺便给导航栏加特效
function navToggle(s, type) {

    if (s > showOrHideNav) {
        if (type === 1) {
            _$header.addClass("navOverflowHidden");
            _$header.stop().animate({
                height: "0px",
                top: "-1px"
            }, 500);
            _$header.css();
        } else {
            _$header.stop().animate({
                top: "-81px",
            }, 500);
            _$section.stop().animate({
                "margin-top": "0px"
            }, 500);
        }
    } else if (s < showOrHideNav) {
        if (type === 1) {
            _$header.stop().animate({
                height: "80px",
                top: "0px"
            }, 500);
            setTimeout(function() {
                _$header.removeClass("navOverflowHidden");
            }, 300);
        } else {
            _$header.stop().animate({
                top: "0px"
            }, 500);
            _$section.stop().animate({
                "margin-top": "100px"
            }, 500);
        }
    } else {
        if (type === 1) {
            _$header.stop().animate({
                height: "80px",
                top: "0px"
            }, 500);
            setTimeout(function() {
                _$header.removeClass("navOverflowHidden");
            }, 300);
        } else {
            _$header.stop().animate({
                top: "0px"
            }, 500);
            _$section.stop().animate({
                "margin-top": "100px"
            }, 500);
        }
    }
    showOrHideNav = s;

}

gotoTop();