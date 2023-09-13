
var breakpointMin  = 699; 
var breakpointMax  = 1026;
var viewport       = window.innerWidth;

if(viewport > breakpointMin && viewport < breakpointMax) {
    (function($) {
        $( ".dispenser" ).click(function() {
            $( this ).toggleClass( "show-display-taxo" );
        });
    })(jQuery);
}

if(viewport > breakpointMin && viewport < breakpointMax) {
    jQuery('.header-mobile-ipad').css('display','block');
    jQuery('.header-mobile').remove();
    jQuery('.header5').remove();
    jQuery('.menu5').remove();
    jQuery('.header-fixed').css('display','none');
} else {
    jQuery('.header-mobile-ipad').remove();
    jQuery('.header-fixed').css('display','block');
}
