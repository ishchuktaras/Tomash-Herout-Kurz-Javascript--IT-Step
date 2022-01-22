$(".tlacitko").click(function(){
    $(".tlacitko").css('color','red');
    $(".tlacitko").animate({left: '250px'}, 4000);
});
function animaceDivu(){
    let objevujici = $('.objevujici');
    let vyska_okna = window.innerHeight;
    let objevujic_pole = Array();
    let vyska;
    let vyska_elementu;
    let pozice_elementu;
    objevujici.each(function(){
        vyska_elementu = $(this).height();
        pozice_elementu = $(this).position().top;
        objevujic_pole.push(pozice_elementu);
        if(vyska_okna <  pozice_elementu){
            $(this).css('left', '-100vw');
        }
    });
    //console.log(objevujic_pole);
    
    objevujici.css('opacity', 0);
    
    setTimeout(function(){
        objevujici.animate({'opacity': 1}, 5000);
    }, 3000);
    $(document).scroll(function(){
        vyska = $('html').scrollTop();
        
        for(let i=0; i < objevujic_pole.length; i++){
            objevujici.each(function(){
                if(vyska =>  objevujic_pole[i]){
                    console.log(vyska + ' - ' + objevujic_pole[i]);
                    $(this).css('left', '0vw');
                    
                }
            });
        }
        
        
    });
}
animaceDivu();



