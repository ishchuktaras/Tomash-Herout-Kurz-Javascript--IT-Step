$(".tlacitko") .click(function() {
    $(".tlacitko").animate({left: '250px'});
});
function animaceDivu() {

    /*promenna*/
    let objevujici = $('.objevujici');
    let vyska_okna = window.innerHeight;
    let vyska;
    let objevujici_pole = Array ();
    let vyska_elementu;
    let pozice_elementu;

    objevujici.each(function(){
        vyska_elementu = $(this).innerHeight();
        pozice_elementu = $(this).position().top;
        objevujici_pole.push(pozice_elementu);
        if(vyska_okna < pozice_elementu){
            $(this).css('left','-100vw');
        }
        
    });

    console.log(objevujici_pole);

   


    objevujici.css('opacity',0);

    setTimeout(function() {
        objevujici.animate({'opacity':100}, 50000);
    }, 3000 );
    $(document).scroll(function() {
        vyska = $('html').scrollTop();
        for(let i = 0; i < objevujici_pole.lenth; i++){
            objevujici.each(function(){
                if(vyska < objevujici_pole[i]){
                    $(this).css('left','0vw')
                }
            });
         }   
        
        console.log(vyska);
    });
}
animaceDivu();