$(function(){

$( "li u font[color='#a36209']" ).on( "click", function( event ) {
  yaCounter142838.reachGoal('StudioMailClick');
});



	// Tab event bind

	var mainMenu = $('#mainMenu');
	var tabMenuLink = $('#tabMenu a');
	var tabSubMenu = $('#tabSubMenu');
	var className = 'active';

	function getSubMenuActiveElement () {
		return tabSubMenu.find('.' + className);
	}

	function hideActive (active) {
		tabMenuLink.filter('[data-target=#' + active.attr('id') + ']').closest('li.' + className).removeClass(className);
		active.removeClass(className);
	}

	tabMenuLink.hover(function (e) {
		var el = $(this);
		var active = getSubMenuActiveElement();
		// Если есть ID - открыть таб
		// Иначе скрыть предыдущую активную вкладку, если она есть
		if ($(el.attr('data-target'))[0]) {
			el.tab('show');
		} else if (active) {
			hideActive(active);
		};
	});

	mainMenu.mouseleave(function (e) {
		var active = getSubMenuActiveElement();
		if (active) {
			hideActive(active);
		};
	});

});

// ScrollTop action bind
$('#toTop').click(function (e) {
	e.preventDefault();
	$("body").animate({"scrollTop":0},"slow");
});

$(document).ready(function() {

	$('.burger').click(function (ev) {
		$('.header-wrap').toggleClass('header-wrap--active');
		$(this).toggleClass('burger--active');
	});
});

/* Apply fancybox to multiple items */
$(function(){
	if($.fancybox) {
		$("a.gallery").fancybox({
			'openEffect'	:	'elastic',
			'closeEffect'	:	'elastic',
			'padding'		:	0,
			'margin'		:	70,
			helpers : {
				overlay : {
					locked : false
				}
			}
		});
	}
});