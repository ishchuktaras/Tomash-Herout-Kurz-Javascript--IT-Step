$(function() {
	$('.main li').hover(
		function(){
			$('>ul.sub:not(:animated)',this).slideDown(600);
		},
		function(){
			$('>ul.sub',this).slideUp(1500);
		}
	);
});