$(function(){

    $('.header__burger').click(function(event){
        $('.header__burger, .menu, .btn-header').toggleClass('active');
        $('body').toggleClass('no-scroll');
    });

    $('.case__slaider').slick({
        arrows:true,
        slidesToShow:1,
        slidesToScroll:1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200,
    });

    $('.clients__slaider').slick({
        arrows:true,
        dots: true,
        dotsClass: 'clients__slaider-dots',
        slidesToShow:5,
        slidesToScroll:5,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200,


        responsive: [
            {
              breakpoint: 951,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            }]

    });


    
});