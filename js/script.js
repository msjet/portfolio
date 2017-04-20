$(function(){
   $(window).scroll(function () {
        var $scrolltop = $(window).scrollTop();
        if ($scrolltop < 500) {
            $('#pagetop').hide();
        } else {
            $('#pagetop').show();
        }

    });
    
    $('#pagetop').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
        return false;
    });
    
})