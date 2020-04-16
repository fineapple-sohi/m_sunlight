jQuery(function ($) {


	/*header */
	var $header = $('#header');
	var $hamBtn = $('#hamBtn');
	var $gnb = $('#gnb');

	
	$hamBtn.on('click', function(){
		if($header.is('.active')) {
			$(this).addClass('ani-on');
			$depth1.parent('li.on').removeClass('on').find('.sub-menu').stop().animate({height: '0'}, 800);
			$('body').css("overflow", "scroll");
		}
		else {
			$(this).removeClass('ani-on');
			$('body').css("overflow", "hidden");
		}

		$header.toggleClass('active');
		$(this).toggleClass('active');
		
		$gnb.toggleClass('on');


	});


	var $depth1 = $gnb.find(".depth1 > li > a");
	var $depth2 = $gnb.find(".sub-menu");

	$depth1.on('click', function(event){
        var tg = $(this);

        if($(this).next('ul.sub-menu').length) {
            event.preventDefault();

            if (tg.parent('li').is('.on')) {
                depth2Close(tg);
            } else {
                dep2Open(tg);
            }
        }

	});

	function dep2Open(target) {
		var depth2Hei = target.next('.sub-menu').children().length;
		var depth2Fz = parseInt($depth2.css('fontSize')) + 30;

		$depth1.parent('li.on').removeClass('on').find('.sub-menu').stop().animate({height: '0'}, 500);
		target.parent('li').addClass('on').find('.sub-menu').stop().animate({height: depth2Hei * depth2Fz}, 500);

	}


	function depth2Close(target) {
		target.parent('li').removeClass('on').find('.sub-menu').stop().animate({height: '0'}, 800);
	}


    /* movetop */
    // $('#moveTop').on('click', function(event){
    //     event.preventDefault();
    //     $('html, body').stop().animate({scrollTop: 0}, 600);

    // });


	/* waypoint */
	$('.waypoint').each(function (index, item) {
		$(item).waypoint(function (direction) {
			if (direction === 'down') $(this[0, 'element']).addClass('on');
			else if (direction === 'up') $(this[0, 'element']).removeClass('on');
		}, {
			offset: '65%'
		});
	});
	













    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({triggerElement: "#main",
    offset: 50,
    triggerHook: 'onLeave'})

    .setClassToggle("#header", "on") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#main",
    offset: 50,
    triggerHook: 'onLeave'})

    .setClassToggle("#hamBtn", "on") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#main",
    offset: 50,
    triggerHook: 'onLeave'})

    .setClassToggle(".quick", "on") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);


});