(function(jQuery){
    
    jQuery(function() {
        jQuery(":not(.owl-carousel-slider) img.lazy").lazyload({
            effect: "fadeIn"
        });
        
        jQuery("img.lazy").lazyload({
            effect: "fadeIn",
            threshold : 400,
            event : "sporty"
        });
    
    });
    
    jQuery(window).bind("load", function() {
        var timeout = setTimeout(function() {
            jQuery("img.lazy").trigger("sporty")
        }, 1000);
    });
	
})(jQuery);