(function(jQuery){
    
    jQuery('.select').customSelect();
    jQuery('.custom-nkol-checkout_cart .carrinho-heading span').html('Carrinho');
    jQuery(".board.caixa-forma-frete table tbody > tr:nth-child(2) > td:nth(1)").css('border-left','1px solid #ccc');
	
	 var numbercatg = jQuery(".numbercatg .catalogo-display > strong:first-child");
    jQuery(".numbercatg .catalogo-display").html('(<div class="numbercatgIn"></div>)');
    jQuery(".numbercatg .catalogo-display .numbercatgIn").append(numbercatg);
    
    var idLoja = jQuery('html').data('store');
        jQuery("#lista-noticias").load("busca_noticias.php?loja="+ idLoja +" .noticias");
	
})(jQuery);