$(document).ready(function(){


    /* interior slide */
    var interiorSwiper1 = new Swiper('.interiorView1', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                // return '<span class="' + className + '">' + (index + 1) + '</span>';
                return '<span class="' + className + '"><img src="images/place/thumb_hg0' + (index + 1) + '.jpg" alt=""></span>';
            },
        },
        speed: 800,
        autoplay: {
            delay: 2000,
          },
        loop: true,
        effect: 'fade',

        observer: true,
        observeParents: true,
        
    });

    var interiorSwiper2 = new Swiper('.interiorView2', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                // return '<span class="' + className + '">' + (index + 1) + '</span>';
                return '<span class="' + className + '"><img src="images/place/thumb_mg0' + (index + 1) + '.jpg" alt=""></span>';
            },
        },
        speed: 800,
        autoplay: {
            delay: 2000,
          },
        loop: true,
        effect: 'fade',
        
        observer: true,
        observeParents: true,
    });


    /* sub tab */
    var $tabList = $('.sub_tap .tablist .tab');

    var teachtabHei = $('#teachTab .tabcnt .tabpanel.active').outerHeight(true);
    var faciTabHei = $('#faciTab .tabcnt .tabpanel.active').outerHeight(true);



    $tabList.on('click', function(){
        
        var tabbidx = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');
        $(this).parent('.tablist').next().children('.tabpanel').eq(tabbidx).addClass('active').siblings().removeClass('active');

        teachtabHei = $('#teachTab .tabcnt .tabpanel.active').outerHeight(true);
        $('#teachTab .tabcnt').css({height: teachtabHei});
    });

    $(window).on('resize', function(){

        teachtabHei = $('#teachTab .tabcnt .tabpanel.active').outerHeight(true);
        $('#teachTab .tabcnt').css({height: teachtabHei});

        faciTabHei = $('#faciTab .tabcnt .tabpanel.active').outerHeight(true);
        $('#faciTab .tabcnt').css({height: faciTabHei});

    });

    $(window).resize();



    /* teacher tablist */
    // var controller = new ScrollMagic.Controller();
    // var teachHei = $('#teachTab .tabpanel.active').outerHeight(true);

    // if($('#teachTab').length) {

    //     var scene = new ScrollMagic.Scene({
    //         triggerElement: "#teachTabcnt", 
    //         duration: 0,
    //         triggerHook: 0.25
    //     })
    //     .setPin("#teachBtns")
    //     .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
    //     .addTo(controller);
    
    
    //     new ScrollMagic.Scene({
    //         triggerElement: "#teachBtns",
    //         triggerHook: 'onLeave',
    //         duration: teachHei
    //     })
    
    //     .setClassToggle("#header", "none") // add class toggle
    //     //.addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);


    //     new ScrollMagic.Scene({
    //         triggerElement: "#teachBtns",
    //         triggerHook: 'onLeave',
    //         duration: teachHei
    //     })
    
    //     .setClassToggle("#hamBtn", "none") // add class toggle
    //     //.addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);
    // }

   




});