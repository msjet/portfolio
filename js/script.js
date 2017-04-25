$(function () {
    $(window).scroll(function () {
        var $scrolltop = $(window).scrollTop();
        if ($scrolltop < 500) {
            $('#pagetop').hide();
        } else {
            $('#pagetop').show();
        }

    });

    $('#pagetop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    $('.menu').click(function () {
        $('#gnav').stop().slideToggle(500);
    });

    $('.menu').click(function () {
        $(this).toggleClass('active');
        return false;
    });

    var navPos = $('#header').offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > navPos) {
            $('#header').css('position', 'fixed');
        } else {
            $('#header').css('position', 'static');
        }
    });

    $('#gnav a').click(function () {
        var target = $($(this).attr('href')).offset().top;
        target += 20;
        $('html,body').animate({
            scrollTop: target
        }, 500);

        return false;
    });
});