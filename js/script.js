$(function(){

    $('.info-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      prevArrow: $(".info-slider__navigation-left"),
      nextArrow: $(".info-slider__navigation-right"),
      responsive: [
        {
          breakpoint: 860,
          settings: {
            arrows: false,
            autoplay: true
          }
        }
      ]
    });
  
  
  $('.header-top__info-btn').on('click', function(){
    $('.header-top__info-menu').slideToggle();
  });
  
  
  $('.main-burger').on('click', function(){
    $('.menu').slideToggle();
  });
  
  let company = $('.airlanes');
  let companyTop = company.offset().top;
   $(window).bind('scroll', function(){
       let windowTop = $(this).scrollTop();
       if(windowTop > companyTop) {
           console.log('object')
           $('#map').html(' <iframe class="frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d840.0309250284822!2d166.63963621695973!3d-77.84578639139579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaf772d783012d4d9%3A0xa8fe2247b51512d2!2sScott&#39;s%20Hut!5e0!3m2!1suk!2sua!4v1602847859493!5m2!1suk!2sua"></iframe>')
            $(window).unbind('scroll')
       }
   })
  });