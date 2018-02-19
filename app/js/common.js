$(function() {

	$(document).ready(function(e){
		   var left = 0,
		   top = 0,
		   element = $('body'),
		   offset =  { left: element.offset().left, top: element.offset().top };
		   element.bind('mousemove', function(e){
		      left = (e.pageX-offset.left);
		      top = (e.pageY-offset.top);
		      $(this).css({
		          backgroundPosition: '-'+(0.2*left)+'px -'+(0.15*top)+'px'
		      });
		    });
		});

		new WOW().init();
		// alert('OK');
	// $('.sub-nav ul').hide();
	// $('.sub-nav>a').hover(
	// 	function() {
	// 		var ul = $(this).parent('.sub-nav').children('ul');
	// 		ul.show(100); 
	// 	}, function() {
	// 		$('.sub-nav ul').hover(function(){
	// 			$(this).show();
	// 		}, function() {
	// 			$(this).hide();
	// 		});
	// 	});	

});