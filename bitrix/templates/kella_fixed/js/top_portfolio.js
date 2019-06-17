$(".top_toggler").click(function(e) {
	e.preventDefault();
	$(this).parents(".top_portfolio").children(".row:last").slideToggle();
	//$(".top_portfolio .row:last").slideToggle();
	$(this).toggleClass('active');
	var data = $(this).data();
	$(this).text($(this).text() == data.show ? data.hide : data.show);
});