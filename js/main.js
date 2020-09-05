jQuery(function($) {
    $('.carousel').carousel()
    $('.menu-btn').click(function(){
    $(this).toggleClass('menu-btn-active');
    if($(this).hasClass('menu-btn-active')){
        $('.view-block').css('opacity','1');
    }else{
        $('.view-block').css('opacity','0');
    }
});
});