$(document).on('touchstart', onTouchStart);

function onTouchStart(event) {
// Lï¿½gica para manipular o evento touchstart
// Vocï¿½ pode acessar informaï¿½ï¿½es sobre o toque atravï¿½s do objeto `event`

// Exemplo de aï¿½ï¿½o: exibir as coordenadas do toque
console.log('Coordenadas do toque:', event.touches[0].clientX, event.touches[0].clientY);
}

setTimeout(() => {
    document.addEventListener('scroll', function() {
        let semJuros = document.querySelectorAll('span.operadora');    

        if (semJuros != null) {
            for(e=0; e<semJuros.length; e++) {
                if(semJuros[e].innerHTML != "sem juros") {
                    semJuros[e].innerHTML = "sem juros";            
                };
            };
        }

        let a = document.querySelectorAll('strong.color'), 
            letra = document.getElementById('em-').innerHTML;
        
        if(a != null) {
            for(i=0;i<a.length;i++) {
                a[i].setAttribute('data-value', letra);
            };
        }
    });

    document.addEventListener('click', function() {
        let semJuros = document.querySelectorAll('span.operadora');    

        if (semJuros != null) {
            for(e=0; e<semJuros.length; e++) {
                if(semJuros[e].innerHTML != "sem juros") {
                    semJuros[e].innerHTML = "sem juros";            
                };
            };
        }

        let a = document.querySelectorAll('strong.color'), 
            letra = document.getElementById('em-').innerHTML;

        if(a != null) {
            for(i=0;i<a.length;i++) {
                a[i].setAttribute('data-value', letra);
            };
        }
    });
}, 1000);

const pageLista = jQuery(".page-lista .container3>.container2>h2.color"),
      filtroDeProdutos = jQuery("#filtro-produtos"),
      flinston = document.querySelector('.flinston');
      
      if( pageLista != null && filtroDeProdutos && flinston) {
        pageLista.css("float", "left");
        filtroDeProdutos.append(pageLista);
        flinston.style.display = 'block';
      }

(function () {
    'use strict';
    var label;
    var price = [...Array(501).keys()];
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get("prices[]");
    if (param) {
        label = [~~param.split(",")[0], ~~param.split(",")[1]];
    } else {
        label = [0, 500]
    }
    var init = function () {
        var slider = new rSlider({
            target: '#slider',
            values: price,
            range: true,
            scale: false,
            labels: false,
            tooltip: false,
            set: label,
            onChange: function (vals) {
                jQuery("input#slider + .rs-container + label")[0].innerHTML = "R$ " + (vals
                    .split(",")[0] ? vals.split(",")[0] : "00") + " - " + "R$ " + (vals
                    .split(",")[1] ? vals.split(",")[1] : "00")
                console.log(vals);
            }
        });
    };
    window.onload = init;
})();

if (window.location.pathname == "/loja/confirmar_news.php") {
    $$(".container-custom .board>p")[0].innerHTML = $$(".container-custom .board>p")[0].innerHTML.replace(
        /Aproveite.*/, '{{ settings.newletter_comfirm }}');
    $$(".container-custom .board>a")[0].outerHTML = "";
}

// WISHLIST
window.addEventListener("load", () => {
    document.querySelectorAll(".page-search input[type=image]").forEach(x => {
        x.type = "submit";
        x.value = "Pesquisar"
    })
});

setTimeout(() => {
    let listaA = jQuery("div#bloco-add-lista.lista-unica a,div#bloco-add-lista a");
    
    if (listaA != null) {
        
        listaA[0].innerHTML = "";
        listaA.append(
            "<img src='{{ asset('img/heart.png') }}' alt=''>"
        );
    }    
}, 1000);

$("#search")[0].onclick = (e) => {
    if (!$("#search")[0].previousElementSibling.value) e.preventDefault();
};

// WISHLIST
window.addEventListener("load", () => {
    let comprarProduto = document.querySelectorAll(".page-lista .lista-produto-comprar input[type=image]"),
        listaProduto = document.querySelectorAll(".page-lista .lista-produto-imagem img");
    setTimeout(() => {
        if(comprarProduto != null) {
            comprarProduto.forEach(x => {
                x.type = "submit";
                x.value = "Comprar"
            });
        }
        listaProduto.forEach(x => {
            x.src = x.src.replace("90_", "")
        })
    }, 1000)
});

$(document).ready(function() {
    if($('.container_listagem .clearfix')) {
        $('.container_listagem .clearfix').css('display', 'block');
    }
    if($('span.btns-paginator.btn-primeira-pagina a')) {
        $('span.btns-paginator.btn-primeira-pagina a').text('<<');
    }
    if($('span.btns-paginator.btn-pagina-anterior.icon-prev a')) {
        $('span.btns-paginator.btn-pagina-anterior.icon-prev a').text('<');
    }
    if($('span.btns-paginator.btn-proxima-pagina.icon-next-dir a')) {
        $('span.btns-paginator.btn-proxima-pagina.icon-next-dir a').text('>');
    }
    if($('span.btns-paginator.btn-ultima-pagina a')) {
        $('span.btns-paginator.btn-ultima-pagina a').text('>>');
    }
});

var sheet = document.createElement('style'), rep=0;
sheet.innerHTML = "";
document.body.appendChild(sheet);
jQuery(".diferenciais_topo .diff_item").first().clone().appendTo(".diferenciais_topo");
interval = setInterval(function() {
if(rep>2){
    rep=0;
    sheet.innerHTML = `transition: 0s}`;
    sheet.innerHTML = `.diferenciais_topo .diff_item{transform: translatex(0%);transition: 0s}`;
    // sheet.innerHTML = `.diferenciais_topo .diff_item{transform: translatex(-${rep}00%);transition: 0s}`;
}else{
    rep++
    sheet.innerHTML = `.diferenciais_topo .diff_item{transform: translatex(-${rep}00%);`;
}
}, 4000);

let carrinhoHead = document.querySelector('.carrinho-heading span')
    if(carrinhoHead != null) {
        carrinhoHead.style.display = 'none!important;';
    }
let title = document.createElement('h1');
title.id = 'titulo_cadastro';
title.innerText = 'Cadastro';

let carrinho = document.querySelector('.carrinho-heading');
    if(carrinho != null) {
        carrinho.append(title);
    }

    let thanks = document.querySelector('.obriga.red');

    if(thanks != null) {
        thanks.innerHTML = '*';
    }

window.addEventListener("load", function(event) {
    setTimeout(()=> {document.querySelector('.loadingmodal').style.display="none";},1000);
});

let review = document.querySelector('div#comentario_cliente h5');
    if(review != null) {
        review.innerHTML = '* Mï¿½XIMO 512 CARACTERES';
        document.querySelector('div#comentario_cliente label input').removeAttribute('disabled');
        document.querySelector('input#email_coment').removeAttribute('disabled');
    }

let prodAbas = jQuery('div#ProdAbas ul li#Aba3');
    if(prodAbas != null) {
    prodAbas.before(jQuery('div#ProdAbas ul li:nth-child(2)'));
    jQuery('div#ProdAbas ul li').removeClass('aberta');
    jQuery('.prodBox').css('display', 'none');
    jQuery('div#ProdAbas ul li:first-child').addClass('aberta');
    jQuery('div#AbaPersonalizadaConteudo11').show();
    jQuery('div#AbaPersonalizadaConteudo11 div#descricao').show();
}