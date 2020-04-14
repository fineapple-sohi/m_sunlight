jQuery(function ($) {


	/*header */
	var $header = $('#header');
	var $hamBtn = $('#hamBtn');
	var $gnb = $('#gnb');

	$hamBtn.on('click', function(){
		if($header.is('.active')) {
			$(this).addClass('ani-on');
			$depth1.parent('li.on').removeClass('on').find('.sub-menu').stop().animate({height: '0'}, 800);
		}
		else $(this).removeClass('ani-on');

		$header.toggleClass('active');
		$(this).toggleClass('on');
		
		$gnb.toggleClass('on');

		// if($header.is('.active')) scrollDisable();
		// else scrollAble();

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
		var depth2Fz = parseInt($depth2.css('fontSize')) + 22;

		$depth1.parent('li.on').removeClass('on').find('.sub-menu').stop().animate({height: '0'}, 500);
		target.parent('li').addClass('on').find('.sub-menu').stop().animate({height: depth2Hei * depth2Fz}, 500);

	}


	function depth2Close(target) {
		target.parent('li').removeClass('on').find('.sub-menu').stop().animate({height: '0'}, 800);
	}




    var lastScrollTop = 0; 
    var delta = 5;
	var didScroll; 
	
    // 스크롤시에 사용자가 스크롤했다는 것을 알림 
    $(window).scroll(function(event){ 
        didScroll = true;
    }); 
    // hasScrolled()를 실행하고 didScroll 상태를 재설정 
    setInterval(function() { 
        if (didScroll) { 
            hasScrolled(); 
            didScroll = false; 
        } 
    }, 250); 
    
    function hasScrolled() { 
        var st = $(this).scrollTop();
        if(Math.abs(lastScrollTop - st) <= delta) 
            return;
        
        if (st > 0){ 
            // Scroll Down 
            $('body').removeClass('nav-down').addClass('nav-up'); 
        } else { 
            // Scroll Up 
            if(st + $(window).height() < $(document).height()) { 
                $('body').removeClass('nav-up').addClass('nav-down'); 
            } 
        } 
        
        lastScrollTop = st;
        
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



});