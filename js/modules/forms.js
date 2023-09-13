(function($){
    jQuery('.titulo-login').parent().parent().parent().parent().addClass('form-custom-nkol');
    jQuery('.caixa-login').addClass('back-custom-nkol');
    jQuery('.caixa-cadastro').addClass('back-custom-nkol');
    
    jQuery('#email_login').prop('type', 'email');
    jQuery('#email_login').attr({
        'placeholder': 'Email'
      });
   
    jQuery('#senha_login').attr('placeholder', 'Senha');  
    jQuery('#email_cadastro').attr('placeholder', 'Email');
    
    jQuery('#CadastroAbas').parent().parent().parent().addClass('register-custom-nkol');
    
    // Inserindo ALT automatico
    jQuery('img:not([alt])').each(function(){
        var copyimg = $(this); 
        var filename = copyimg.attr('src') 
        // copyimg.attr('title', filename . substring (( filename . lastIndexOf ('/'))+ 1 , filename . lastIndexOf ('.'))); 
        copyimg.attr('alt', filename . substring (( filename . lastIndexOf ('/'))+ 1 , filename . lastIndexOf ('.'))); 
    });
   
})(jQuery);


