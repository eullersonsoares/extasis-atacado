
var lastScrollTop = 0;
jQuery(window).scroll(function (event) {
    var st = jQuery(this).scrollTop();
    if (st > lastScrollTop){
        if (lastScrollTop > 300){
            if (!jQuery(".head-fixed").hasClass("show-head")) {
                jQuery('.head-fixed').addClass("show-head");
            }
        } 
    } else {
        jQuery('.head-fixed').removeClass("show-head");
    }
    if (lastScrollTop < 300) {
        if (jQuery(".head-fixed").hasClass("show-head")) {
            jQuery('.head-fixed').removeClass("show-head");
        }
    }
   lastScrollTop = st;
});

