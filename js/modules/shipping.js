(function(jQuery){
    jQuery(document).ready( function(){

        // shipping added below cepbox
        function waitForElementToDisplay(selector, time) {
            if(document.querySelector(selector)!=null) {
                jQuery('.shipping-result').html(jQuery('.page-simula-frete'));
                return;
            }
            else {
                setTimeout(function() {
                    waitForElementToDisplay(selector, time);
                }, time);
            }
        }
        
        jQuery('.botao-simular-frete, #shippingSimulatorButton').click(function() {
            jQuery('.shipping-result').html('');
            waitForElementToDisplay('.page-simula-frete', 200);
        });
    
    });
})(jQuery);