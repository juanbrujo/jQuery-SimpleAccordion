;(function ($, window, document, undefined) {

	"use strict";

	jQuery.fn.simpleAccordion = function(settings){
		settings = jQuery.extend({
			header: "dt",
			collapsable: "dd",
			speed: "fast"
		}, settings);
		
		return this.each(function(){
			$(settings.collapsable).hide();
			$(settings.header).click(function(){
				var checkElement = $(this).next();
				if((checkElement.is(settings.collapsable)) && (checkElement.is(':visible'))) {
					$(settings.collapsable+':visible').slideToggle(settings.speed).prev().toggleClass('selected');
					return false;
				}
				if((checkElement.is(settings.collapsable)) && (!checkElement.is(':visible'))) {
					$(settings.collapsable+':visible').slideToggle(settings.speed).prev().toggleClass('selected');
					checkElement.slideToggle(settings.speed);
					$(this).toggleClass('selected');
					return false;
					}
				}
			);
		});
	};

})(jQuery, window, document);