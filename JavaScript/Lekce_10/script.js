function modalniOkno(nadpis, obsah, css){
    $('#modalni-okno').addClass(css);
    $('#modalni-okno').css('display', 'block');
    $('#modalni-okno h2').html(nadpis);
    $('#modalni-okno-obsah').html(obsah);
    $('#zavrit').click(function(){
        $('#modalni-okno').removeAttr('style'); 
    });
    let vyska_modal_okna = $('#modalni-okno').outerHeight();
    let vyska_okna_prohlizece = $(window).height();
    let horni_odsazeni = (vyska_okna_prohlizece - vyska_modal_okna)/2;
    $('#modalni-okno').css('top', horni_odsazeni);
    
}
$(".tlacitko").click(function(){
    $(".tlacitko").css('color','red');
    $(".tlacitko").animate({left: '250px'}, 4000);
});
function menu(){
    $('#menu ul ul').addClass('skryt');
    $('#menu > ul > li > a').click(function(){
        $(this).siblings('ul').toggleClass('skryt');
        return false;
    });
}
function menu2(){
    $('menu > ul ul').hide();
    $('menu > ul > li').mouseenter(function(){
        $(this).children('ul').show();
    });
    $('menu > ul > li').mouseleave(function(){
        let tento = $(this);
        let casovani = setTimeout(function(){ 
            tento.children('ul').hide(1000);
        }, 900);
        $('menu > ul > li').mouseleave(function(){
            clearTimeout(casovani);
        });
        
        
    });
}
function formular(){
    $('#formular1').submit(function(){
        let pole_chyb = new Array();
        // kontrola jmena
        let hodnota_inputu = $('input[name="jmeno"]').val();
        var x = /^[a-zA-Z]{2,10}$/;
        if( !x.test(hodnota_inputu) ){
            pole_chyb.push('Nesplnili jste podmínku při zadání jména.');
            $('input[name="jmeno"]').addClass('chyba');
        }else{
            $('input[name="jmeno"]').removeClass('chyba');
        }
        // kontrola pohlavi
        let hodnota_pohlavi = $('#pohlavi').val();
        if(hodnota_pohlavi == 0){
            pole_chyb.push('Nezvolili jstre pohlaví.');
            $('#pohlavi').addClass('chyba');
        }else{
            $('#pohlavi').removeClass('chyba');
        }
//        kontrola souhlasu obchodních podmínek
        let hodnota_podminky = $('#podminky').prop("checked");
        if(!hodnota_podminky){
            pole_chyb.push('Nedali jste souhlas s obchodními podmínkami.');
            $('#podminky').parent().addClass('chyba');
        }
//        kontrola hlasovani
        let hlasovani1 = $('input[name="hlasovani"]')[0].checked;
        let hlasovani2 = $('input[name="hlasovani"]')[1].checked;
        if(!hlasovani1 && !hlasovani2){
            pole_chyb.push('Nehlasovali jste, zvolte buď ano nebo ne.');
            $('input[name="hlasovani"]').parent().addClass('chyba');
        }
        
        console.log(hlasovani2);
        // zaverecna kontrola
        if(pole_chyb.length > 0){
//            setavovani HTML kodu s vypisem chyb
            let chyby_promenna = '<ul>';
            for(let i = 0; i < pole_chyb.length; i++){
                chyby_promenna += '<li>'+pole_chyb[i]+'</li>';
            }
            chyby_promenna += '</ul>';
//            Zavolani okna a predani chyb ve forme argumnetu
            modalniOkno('Chyba', chyby_promenna, 'cervena');
            return false;    
        }
        
    });
    // kontrola jmena po opusteni pole 'jmeno'
    $('input[name="jmeno"]').blur(function(){
        let hodnota_inputu = $('input[name="jmeno"]').val();
        var x = /^[a-zA-Z]{2,10}$/;
        if( !x.test(hodnota_inputu) ){
            alert('Nesplnili jste podmínku při zadání jména.');
            $('input[name="jmeno"]').addClass('chyba');
        }else{
            $('input[name="jmeno"]').removeClass('chyba');
        }
    });
    // kontrola pohlavi po volbe pohlavi
    $('#pohlavi').change(function(){
        let hodnota_pohlavi = $('#pohlavi').val();
        if(hodnota_pohlavi == 0){
            alert('Nezvolili jstre pohlaví.');
            $('#pohlavi').addClass('chyba');
        }else{
            $('#pohlavi').removeClass('chyba');
        }
    }); 
}
function cistVice(){
   $('.cist-vice-tl').click(function(){
       let toto = $(this).siblings('.cist-vice');
       $('.cist-vice').not(toto).hide(1000);
       toto.toggle(1000);
   }); 
}
function responzivni(){
    let sirka_monitoru = window.innerWidth;
    let x;
    if(sirka_monitoru > 1200){
        x = (sirka_monitoru/3)-20;
    }else if(sirka_monitoru > 900){
        x = (sirka_monitoru/2)-20;
    }else{
        x = sirka_monitoru;
    }
    $('.objevujici').width(x);
}
$(document).ready(function(){
    menu();
    menu2();
    formular();
    cistVice();
    responzivni();
});
$(window).resize(function(){
    responzivni();
});

/*
 * Vytvorime novou funkci
 * Vytvorime posluchac udalosti na formulari
 * Najdete prvek formulare a zjistite jeho obsah
 * Pominka IF(){}
 * Zjisteni poctu znaku .length
 * Pokud nebude splnena podminka min. poctu znaku, tak zastavime odeslani formulare + informujeme navstevnika
 */

