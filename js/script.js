$(document).ready(function(){

	if('ontouchstart' in window){
		$('.socialIcons a').css('opacity', 1);
		$('a').each(function(){
			$(this).css('color', $(this).css('color'));
		})
	}

  // set the copyright year
  $('#year').html((new Date()).getFullYear());

	var homebg = $('#back'),
    animate = function(){
      homebg.animate({'opacity': 1}, 600);
      $('#layer1').css('marginTop', -300).delay(500).animate({'marginTop': 0, 'opacity': 1}, 600, 'easeInQuad');
      $('#layer2').css('marginTop', 200).delay(1000).animate({'marginTop': 0, 'opacity': 1}, 400, 'easeInQuad');
      $('#layer3').css('marginTop', 200).delay(1200).animate({'marginTop': 0, 'opacity': 1}, 400, 'easeInQuad');
      $('#layer4').css('marginTop', 200).delay(1200).animate({'marginTop': 0, 'opacity': 1}, 400, 'easeInQuad');
    };

  if(homebg[0].complete){
    animate();
  }
  else {
    homebg.load(function(){
      animate();
    });
  }

  function getTopScroll(){
    return $('html').scrollTop() > 0 ? $('html').scrollTop() : $('body').scrollTop();
  }

});
