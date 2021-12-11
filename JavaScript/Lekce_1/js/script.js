$(".tlacitko") .click(function() {
    $(".tlacitko").animate({left: '250px'});
});
function animaceDivu() {

    /*promenna*/
    let objevujici = $('.objevujici');
    objevujici.css('opacity',0);
    setTimeout(function() {
        objevujici.animate({'opacity':100}, 50000);
    }, 3000 );
    $(document).scroll(function() {
        let vyska = $('html').scrollTop();
        let vyska_okna = window.innerHeight;
        
        console.log(vyska);
    });
}
animaceDivu();