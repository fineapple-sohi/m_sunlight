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
    var $tabCnt = $('.sub_tap .tabcnt .tabpanel');

    $tabList.eq(0).addClass('on').siblings().removeClass('on');
    $tabCnt.eq(0).addClass('active').siblings().removeClass('active');

    $tabList.on('click', function(){
        var tabbidx = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');
        $(this).parent('.tablist').next().children().eq(tabbidx).addClass('active').siblings().removeClass('active');

    });



});