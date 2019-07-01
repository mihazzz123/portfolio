$(document).ready(function() {
  var showWorks1 = $('.btn-show__1');
  var showWorks2 = $('.btn-show__2');
  var showWorks3 = $('.btn-show__3');
  var works1 = $('.portfolio-cards__1');
  var works2 = $('.portfolio-cards__2');
  var works3 = $('.portfolio-cards__3');
  var placeholder = 'Какой у Вас проект? \nКакая у Вас задача? \nКакой сайт Вам нужно сделать?';

  showWorks1.click(function() {
    $(this).toggleClass('active');
    if($(this).hasClass('active')) {

      showWorks2.removeClass('active');
      showWorks3.removeClass('active');
      $('.portfolio-item__3').attr('style', '');
      $('.portfolio-item__arrow-3').attr('style', '');
      $(works3).attr('style', '');
      $('.portfolio-item__2').attr('style', '');
      $('.portfolio-item__arrow-2').attr('style', '');
      $(works2).attr('style', '');
      
      $('.portfolio-item__1').css({'height' : '600px', 'animation' : 'overflow 0.8s forwards', 'box-shadow' : '0 0 50px 1px #007bff6b'});
      $(works1).css({'display' : 'flex'});
      $('.portfolio-item__arrow-1').css({'animation' : 'arrow 0.9s forwards'});
    } else {
      $('.portfolio-item__1').attr('style', '');
      $('.portfolio-item__arrow-1').attr('style', '');
      $(works1).attr('style', '');
    }
    
    // works.toggleClass('works-active');
  });

  showWorks2.click(function() {
    $(this).toggleClass('active');
    if($(this).hasClass('active')) {

      showWorks1.removeClass('active');
      showWorks3.removeClass('active');
      $('.portfolio-item__1').attr('style', '');
      $('.portfolio-item__arrow-1').attr('style', '');
      $(works1).attr('style', '');
      $('.portfolio-item__3').attr('style', '');
      $('.portfolio-item__arrow-3').attr('style', '');
      $(works3).attr('style', '');
      
      $('.portfolio-item__2').css({'height' : '600px', 'animation' : 'overflow 0.8s forwards', 'box-shadow' : '0 0 50px 1px #007bff6b'});
      $(works2).css({'display' : 'flex'});
      $('.portfolio-item__arrow-2').css({'animation' : 'arrow 0.9s forwards'});
    } else {
      $('.portfolio-item__2').attr('style', '');
      $('.portfolio-item__arrow-2').attr('style', '');
      $(works2).attr('style', '');
    }
    // works.toggleClass('works-active');
  });
  showWorks3.click(function() {
    $(this).toggleClass('active');
    if($(this).hasClass('active')) {

      showWorks2.removeClass('active');
      showWorks1.removeClass('active');
      $('.portfolio-item__1').attr('style', '');
      $('.portfolio-item__arrow-1').attr('style', '');
      $(works1).attr('style', '');
      $('.portfolio-item__2').attr('style', '');
      $('.portfolio-item__arrow-2').attr('style', '');
      $(works2).attr('style', '');
     
      $('.portfolio-item__3').css({'height' : '600px', 'animation' : 'overflow 0.8s forwards', 'box-shadow' : '0 0 50px 1px #007bff6b'});
      $(works3).css({'display' : 'flex'});
      $('.portfolio-item__arrow-3').css({'animation' : 'arrow 0.9s forwards'});
    } else {
      $('.portfolio-item__3').attr('style', '');
      $('.portfolio-item__arrow-3').attr('style', '');
      $(works3).attr('style', '');
    }
  });

  $('.textarea').attr('value', placeholder);
  $('.textarea').focus(function () {
    if($(this).val() === placeholder){
      $(this).attr('value', '');
    }
  });
  $('.textarea').blur(function () {
    if($(this).val() === ''){
      $(this).attr('value', placeholder);
    }
  });

  // Слайдер обратной связи
  $('#slider1').slick({
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  
  // Модальное окно
  $('.open-modal').click(function () {
    $('.modal').addClass('modal-active');
    // Слайдер-модальноо окна
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      asNavFor: '.slider-for',
      dots: true,
      // centerMode: true,
      focusOnSelect: true
    });
  });

  $('#close').click(function () { 
    // $('.modal').css({'animation' : 'close-modal 0.3s 0s 1 forwards'});
    setTimeout(function () {
      $('.modal').removeClass('modal-active');
      $('.modal').attr('style', '');
    }, 300);
  });


});