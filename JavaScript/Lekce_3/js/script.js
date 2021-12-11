function menu(){
	$('#menu ul ul').addClass('skryt');
	$('#menu > ul > li > a').mouseover(function(){
		$(this).siblings('ul').toggleClass('skryt');
		return false;
	})
}

menu();
