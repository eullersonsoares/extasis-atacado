/**
 * Plugins - Init
 * mobile v1
 **/
;
(function($) {

    $('head').append('<meta id="Viewport" name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1">');


    $(window).resize(function() {
        var windowsize = $(window).width(); // when the browser resizes, reset the width
        $('html').css('width', windowsize);
        $('header').css('width', windowsize);
        $('body').css('width', windowsize);
        $('#NavCentral').css('width', windowsize);
        $('footer').css('width', windowsize);
        $('#NavSuperior').css('width', windowsize);
        $('#div2bg').css('width', windowsize);
        $('#div1bg').css('width', windowsize);
        $('#NavInferior').css('width', windowsize);
        $('#Body').css('width', windowsize);
        $('#Page').css('width', windowsize);
        // $('#NavLogoTray').css('display', 'none');

    });

    var windowsize = $(window).width(); // when the browser resizes, reset the width
    if (windowsize <= 768) {
        $('#Body').append('<div class="fundo-loading"><img class="lazyload"data-sizes="auto" data-src="https://images.tcdn.com.br/img/arquivos/mobile/images/mobile/loading.gif?v2"></div>');
    }

    $(document).ready(function() {
        var windowsize = $(window).width(); // when the browser resizes, reset the width
        if (windowsize <= 768) {

            $('html').css('width', windowsize);
            $('header').css('width', windowsize);
            $('body').css('width', windowsize);
            $('#NavCentral').css('width', windowsize);
            $('footer').css('width', windowsize);
            $('#NavSuperior').css('width', windowsize);
            $('#div2bg').css('width', windowsize);
            $('#div1bg').css('width', windowsize);
            $('#NavInferior').css('width', windowsize);
            $('#Body').css('width', windowsize);
            $('#Body').css('min-width', windowsize);
            $('#Page').css('width', windowsize);
            // $('#NavLogoTray').css('display', 'none');

            if ($('#tabela_carrinho').length) {
                $('#tabela_carrinho tr').not('#tabela_carrinho tr:first-child').each(function() {
                    var nome = $(this).find('strong').html();
                    $(this).before('<tr><td colspan="6" class="nome-produto-carrinho">' + nome + '</td></tr>');
                    $(this).find('td:nth-child(2)').hide();
                });
                $('.nome-produto-carrinho td:first-child').remove();
                $('table.tablePage:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > th:nth-child(1)').attr('colspan', '4');
                $('div.board:nth-child(4) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > th:nth-child(1)').attr('colspan', '8');
                $('div.board:nth-child(4) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1)').attr('colspan', '8');
                $('div.board:nth-child(4) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)').remove();
                $('div.board:nth-child(4) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2)').remove();
            }

            if ($('.caixa-detalhes-compra').length) {
                $('.caixa-detalhes-compra tr:first-child').remove();

                $('.tit-nome-produto').each(function() {
                    var nome = $(this).html();
                    $(this).parent('tr').before('<tr><td colspan="6" class="nome-produto-pagamento">' + nome + '</td></tr>');
                    $(this).remove();
                });

                $('.tit-produto-total').attr('colspan', '3');

            }
            /* Carrinho */
            $('#search-key').replaceWith($('#search-key').clone().attr('type', 'search'));

        }

        $('.fundo-loading').remove();

        $('#FormasPagamento #ProdBlock').each(function() {
            $(this).click(function() {
                $(this).siblings('.lista-formas-pagamento').toggle('normal');
            })
        })

        if ($(location).attr('pathname') == "/loja/retorno_pagamento.php") {
            $('#Page').addClass('msg-finalizar');
            $('#Page p').addClass('msg-p-finalizar');
            $('#Page p').addClass('msg-p-finalizar');
        }

        if ($(location).attr('pathname') == "/loja/central_detalhe_pedido.php") {
                $('p').css('display', 'block');
                $('p').css('padding', '10px 0');
                $('.tablePage img').css('display', 'none');
                $('.tablePage tr th:nth-child(3)').css('display', 'none');
                $('.tablePage tr td:nth-child(4)').css('display', 'none');
                $('.tablePage tr').find('[colspan=4]').attr('colspan', '3');

            }

        var numItems = $('#abasMobile .prodBox').length;

        for (var iz = 0; iz < numItems; iz++) {
            var ix = iz+1;
            $('.prodBox').eq(iz).appendTo($('#abasMobile #Aba'+ix));
        }


        var loja = $('input[name="loja"]').val();
        //$('.central-menu').append('<div class="icoFilho central-icons"> <p>Sair</p><a href="logout.php?loja='+loja+'"></a></div>');

        if ($(location).attr('pathname') == "/loja/central_confirmar_pagamento.php") {
                $('form').find('input[type=text]').css('width', '100%');
                $('form').find('textarea').css('width', '100%');
                $('form').find('br').css('display', 'none');
                $('form').find('p').css('margin', '0');
                $('form').find('p').css('padding', '0 10px');
                $('form').find('label').css('margin', '0');
                $('form').find('input[type=image]').attr('src', 'https://images.tcdn.com.br/img/arquivos/mobile/images/mobile/bt-confirmar-pagamento.png');
                $('.Pedidos > tbody:nth-child(1) > tr:nth-child(1) > th:nth-child(4)').css('display','none');
            }
   
     

        // var loja = $('input[name="loja"]').val();
        // var carrinho = quantidade_carrinho(loja, "quantidade", "");
        // if (carrinho > 0) {

        //     $('.carrinho-resp').append('<span class="qtd-carrinho">' + carrinho + '</span>');

        // }

        var alturaLogo = $('.logo img').height()/2;
        $('.logo img').css('margin-top','-'+alturaLogo+"px");

        $('#produto_preco > span:nth-child(3)').click(function(){
            if($('#produto_preco > span:nth-child(3) a').attr('href') == "javascript:void(0);") {
                $('#none').load(function(){
                    var $head = $("#none").contents().find("head");                
                    $head.append($("<link/>",
                             { rel: "stylesheet", href: "https://images.teste.tray.net.br/img/arquivos/832728/css/mobile.css?v2?aaaa", type: "text/css" }));
                    })
            }            
        })
            
    })


})(jQuery);