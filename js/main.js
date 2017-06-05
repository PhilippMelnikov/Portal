$(document).ready(function () {
    $('.tooltip-button').hover(function(){
        $(this).find('.tool').animate({
            top: '-40px',
            opacity: '1'
        }, 200);
        // $(this).find('.tool').fadeIn(300);


    },
    function(){
        // $(this).find('.tool').fadeOut(300);
         $(this).find('.tool').animate({
            top: '-20px',
            opacity: '0'
        }, 200);
    })

	// Swiper1
    var swiper = new Swiper('.swiper1', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        slidesPerView: 2,
        loop: true
    });

    // Collapsible menu
    $('.collapsible').click(function () {
        if(!$(this).children('.arrow-up').length){

            $(this).find('.fa-angle-double-down').addClass('arrow-up');
        }
        else{
            $(this).find('.fa-angle-double-down').removeClass('arrow-up');
        }
        
    })

    if($(this).width()<768)
        {
            $('.email-input').attr('placeholder', 'enter your email');
        }

    $(window).resize(function(){
        if($(this).width()<768)
        {
            $('.email-input').attr('placeholder', 'enter your email');
        }
        else{
            $('.email-input').attr('placeholder', 'enter your email for our newsletter');
        }
    })
})