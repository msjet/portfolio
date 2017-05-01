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
    
    $('#gnav a').click(function () {
        var target = $($(this).attr('href')).offset().top;
        target -= 0;
        $('html,body').animate({
            scrollTop: target
        }, 500);

        return false;
    });
    
    $('#top-works a').click(function () {

        $('body').append('<div id="bg">');
        $('body').append('<div id="samplesite">');

        $('#bg').hide();
        $('#samplesite').hide();

        $('#samplesite').html('<img>');

        $('#samplesite img').attr('src', $(this).attr('href'));

        $('#samplesite img').attr('width', 100%);
        $('#samplesite img').attr('height', 100%);
        $('#samplesite img').attr('alt', 'Photo');

        $('#bg').fadeIn();
        $('#samplesite').fadeIn();

        $('#bg,#samplesite').click(function () {
            $(this).fadeOut(function () {
                $(this).remove();
            });
            $('#samplesite').fadeOut(function () {
                $(this).remove();
            });
        });

        return false;
    });
});