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

    // anchors
      $('.anchor').click(function () {
         var hrefName = $(this).attr('href');
         var timeToScroll = Math.abs($(window).scrollTop() - $(hrefName).offset().top) / 3;
       $('html, body').animate({
             scrollTop: $(hrefName).offset().top - 60
         }, timeToScroll);
     });

    // swiper
      var mySwiper = new Swiper ('.swiper2', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: '.swiper-pagination',
        centeredSlides: true,
        slidesPerView: 1,
        autoplay: 3000

      })
      // floating header
      $(this).scroll(function() {
          // console.log($(this).scrollTop());
        if($(this).scrollTop() >= $('.counterfeit-1').offset().top){
          $('.main-menu').addClass('floating-menu');
          $('.counterfeit-1').css('height', $('.main-menu').height());
        }else{
          $('.main-menu').removeClass('floating-menu');
          $('.counterfeit-1').css('height', 0);
        }

        if($(this).scrollTop() >= $('.counterfeit-2').offset().top){
          $('.accordion-menu').addClass('floating-menu');
          $('.counterfeit-2').css('height', $('.accordion-menu').height());
        }else{
           console.log($(this).scrollTop());
          $('.accordion-menu').removeClass('floating-menu');
          $('.counterfeit-2').css('height', 0);
        }
      })
      if($(window).width()>768){
        $('.accordion-menu-container').css('display', 'none');
      }
      $(window).resize(function(){
        if($(window).width()>768){
          $('.accordion-menu-container').css('display', 'none');
        }
        else{
          $('.accordion-menu-container').css('display', 'block');
        }
      })

})
