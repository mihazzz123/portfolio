$(document).ready(function() {
  var showWorks1 = $('.btn-show__1');
  var showWorks2 = $('.btn-show__2');
  var showWorks3 = $('.btn-show__3');
  var works1 = $('.portfolio-cards__1');
  var works2 = $('.portfolio-cards__2');
  var works3 = $('.portfolio-cards__3');
  var placeholder = 'Какой у Вас проект? \nКакая у Вас задача? \nКакой сайт Вам нужно сделать?';

  new WOW().init();

  
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
  var openModal = $('.open-modal');
  var modal = $('.modal');
  var openModal1 = $('.open-modal_1');
  var modal1 = $('.modal_1');
  var openModal2 = $('.open-modal_2');
  var modal2 = $('.modal_2');
  var openModal3 = $('.open-modal_3');
  var modal3 = $('.modal_3');
  var openModal4 = $('.open-modal_4');
  var modal4 = $('.modal_4');

  openModal1.click(function () {
    modal1.addClass('modal-active');
    modal1.css({'display' : 'block'});
    $('body').css({'overflow' : 'hidden'});
  });
  openModal2.click(function () {
    modal2.addClass('modal-active');
    modal2.css({'display' : 'block'});
    $('body').css({'overflow' : 'hidden'});
  });
  openModal3.click(function () {
    modal3.addClass('modal-active');
    modal3.css({'display' : 'block'});
    $('body').css({'overflow' : 'hidden'});
  });
  openModal4.click(function () {
    modal4.addClass('modal-active');
    modal4.css({'display' : 'block'});
    $('body').css({'overflow' : 'hidden'});
  });
  
  
    
  $('.close').on('click', function () { 
      modal.removeClass('modal-active');
      $('body').attr('style', '');
  });

  $(function($) {
    $(document).mouseup(function (e) {
      if (!modal.is(e.target)
      && modal.has(e.target).length === 0) {
        modal.removeClass('modal-active');
        $('body').attr('style', '');
      }
    });
  });

   //Кнопка на верх
   $(window).scroll(function () { 
    if($(this).scrollTop() != 0){
    $('#go-top').fadeIn();
    } else {
    $('#go-top').fadeOut();
    }
    });
    $('#go-top').click(function() {
    $('body,html').animate({scrollTop:0},900);
  });

  //Scroll
  
  $(document).on('click','.link' , function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1000);
  });


      // Валидация
  $('#form').validetta();

    //Отправка формы
    $("#main-form").submit(function() {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $("#main-form").trigger("reset");
        $('.modal-wrap').removeClass('modal-wrap__disable').addClass('modal-wrap__active');
        $('.modal-first').addClass('modal-first__active');
      });
      return false;
      });
  
});