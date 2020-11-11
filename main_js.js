$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;
    
    var accordionHeader = this.el.find('.accordion-header');
    accordionHeader.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
  };
  
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.accordion-body').not($next).slideUp().parent().removeClass('open');
    }
  }
  
  var accordion = new Accordion($('.accordion_only'), false);
});

$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;
    
    var accordionHeader = this.el.find('.accordion-header');
    accordionHeader.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
  };
  
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.accordion-body').not($next).slideUp().parent().removeClass('open');
    }
  }
  
  var accordion = new Accordion($('.accordion_only_mobyle'), false);
});

$('.header_bulli').click(function(){
    $('.jpeg_complicated_box').addClass('jpeg_none');
    setTimeout(activeJpeg, 500);
    function activeJpeg() {
     $('.jpeg_1').removeClass('jpeg_none');
        
       
 };
});
$('.header_transform').click(function(){
    $('.jpeg_complicated_box').addClass('jpeg_none');
    setTimeout(activeJpeg, 500);
    function activeJpeg() {
     $('.jpeg_2').removeClass('jpeg_none');
        
       
 };
});


$(function(){
  $('.slider_easy').bxSlider({
      mode: 'horizontal',
      captions: true,
      slideWidth: 310,
      maxSlides: 3,
      minSlides: 2,
      slideMargin: 30,
      moveSlides: 1,
      nextText: "<img src='./images/right.svg' class='next' alt='1'>",
      prevText: "<img src='./images/left.svg' class='prev' alt='1'>",  
  });
});

$(function(){
  $('.bullid_jpeg').bxSlider({
  mode: 'horizontal',
  captions: true,
  maxSlides: 1,
  minSlides: 1,
  moveSlides: 1,  
  infiniteLoop: true,  
  });
});

$(function(){
  $('.transform_jpeg').bxSlider({
  mode: 'horizontal',
  captions: true,
  maxSlides: 1,
  minSlides: 1,
  moveSlides: 1,
  nextText: '',
  prevText: '',   
  infiniteLoop: true,  
  });
});

$(function(){
 $('.communication_jpeg').bxSlider({
   mode: 'horizontal',
   captions: true,
   maxSlides: 1,
   minSlides: 1,
   moveSlides: 1,
   nextText: '',
   prevText: '',   
   infiniteLoop: true,  
     

});
});

$(function(){
  $('.slider_easy').bxSlider({
      mode: 'horizontal',
      captions: true,
      slideWidth: 310,
      maxSlides: 3,
      minSlides: 2,
      slideMargin: 30,
      moveSlides: 1,
      nextText: '',
      prevText: '',  
  });
});

$(function(){
  $('.bullid_jpeg').bxSlider({
  mode: 'horizontal',
  captions: true,
  maxSlides: 1,
  minSlides: 1,
  moveSlides: 1,  
  infiniteLoop: true,  
  });
});

$(function(){
  $('.transform_jpeg').bxSlider({
  mode: 'horizontal',
  captions: true,
  maxSlides: 1,
  minSlides: 1,
  moveSlides: 1,
  nextText: '',
  prevText: '',   
  infiniteLoop: true,  
  });
});

$(function(){
 $('.communication_jpeg').bxSlider({
   mode: 'horizontal',
   captions: true,
   maxSlides: 1,
   minSlides: 1,
   moveSlides: 1,
   nextText: '',
   prevText: '',   
   infiniteLoop: true,  
});
});

$('.video_sleder_big').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.vertical_video_slider'
});
$('.video_sleder_big').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  var current = $(slick.$slides[currentSlide]);
  current.html(current.html());
}); 
$('.vertical_video_slider').slick({
 vertical: true,
 slidesToShow: 3,
 slidesToScroll: 1,
 asNavFor: '.video_sleder_big',
 dots: false,
 arrows: true,
 prevArrow: $('.prev_vertical'),
 nextArrow: $('.next_vertical'),
});
$('.vertical_video_slider').on('beforeChange', function(event, slick, currentSlide){
  var current = $(slick.$slides[currentSlide]);
  current.html(current.html());
}); 

$('.horizontal_video_slider').slick({
  horizontal: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  adaptiveHeight: true,
  swipe: true,
  prevArrow: "<img src='./images/arrowleft.svg' class='video-prev' alt='1'>",
  nextArrow: "<img src='./images/arrowright.svg' class='video-next' alt='2'>",
  focusOnSelect: true
 });
 
 $('.horizontal_video_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  var current = $(slick.$slides[currentSlide]);
  current.html(current.html());
}); 


$('.slider_big_complect').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 adaptiveHeight: true,
 asNavFor: '.horizont_slider'
});
$('.horizont_slider').slick({
 centerMode: true,
 slidesToShow: 5,
 slidesToScroll: 1,
 asNavFor: '.slider_big_complect',
 dots: false,
 arrows: true,
 prevArrow: $('.prev_horisontal'),
 nextArrow: $('.next_horisontal'),
});



/*popup registration -- open*/
$(document).ready(function() { 
$('.start').click( function(event){ 
event.preventDefault(); 
$('#overlay').fadeIn(200, 
function(){
$('#popUp') 
  .css('display', 'block') 
  .animate({opacity: 1, top: '5%'}, 90); 
});
});
/* --close*/
$('#close, #overlay').click( function(){ 
$('#popUp')
.animate({opacity: 0, top: '5%'}, 90, 
function(){ 
  $(this).css('display', 'none'); 
  $('#overlay, #popUp').fadeOut(200); 
}
);
});
});
/*popup say about test --open*/
$(document).ready(function() { 
$('.finish').click( function(event){ 
event.preventDefault(); 
$('#overlayFinish').fadeIn(200, 
function(){
$('#popUpFinish') 
  .css('display', 'block') 
  .animate({opacity: 1, top: '5%'}, 90); 
});
});
/* --close*/
$('#closeFinish, #overlayFinish').click( function(){ 
$('#popUpFinish')
.animate({opacity: 0, top: '5%'}, 90, 
function(){ 
  $(this).css('display', 'none'); 
  $('#overlayFinish, #popUpFinish').fadeOut(200); 
}
);
});
});
/*function pop-up rules*/
$(document).ready(function(){
  PopUpHide();
});
function PopUpShow(){
  $("#popup1").show();
}
function PopUpHide(){
  $("#popup1").hide();
}

/*slider from 7 block */
$('.slider-single').slick({
  slidesToShow: 1,
  fade: true,
  adaptiveHeight: true,
  infinite: false,
  useTransform: true,
  speed: 400,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  responsive: [{
      breakpoint: 560,
      focusOnSelect: true,
      asNavFor: '.slider-nav',
  }]
  });
  
  $('.slider-nav')
  .on('init', function(event, slick) {
  $('.slider-nav .slick-slide.slick-current').addClass('is-active');
  })
  .slick({
  slidesToShow: 7,
  slidesToScroll: 7,
  arrows: true,
  prevArrow: "<img src='images/left.svg' class='prev' alt='1'>",
  nextArrow: "<img src='images/right.svg' class='next' alt='2'>",
  dots: false,
  focusOnSelect: true,
  infinite: false,
  responsive: [{
  breakpoint: 2500,
  settings: {
  slidesToShow: 5,
  slidesToScroll: 1,
  }
      }, 	
      { breakpoint: 1280,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
        },
      {
        breakpoint: 1025,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        }
      }, {
        breakpoint: 940,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },{
        breakpoint: 650,
        focusOnSelect: true,
        asNavFor: '.slider-single',
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
      }]
    });
  
  $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
      var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
    focusOnSelect: false;
  });
  
  $('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');
  
  $('.slider-single').slick('slickGoTo', goToSingleSlide);
  });
// mobyle slider for 7 block
$('.slider-single-mob').slick({
  slidesToShow: 1,
  fade: true,
  adaptiveHeight: true,
  infinite: false,
  useTransform: true,
  speed: 100,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  asNavFor: '.slider-nav-mob',
  });
  
  $('.slider-nav-mob')
  .on('init', function(event, slick) {
  $('.slider-nav-mob .slick-slide.slick-current').addClass('is-active');
  })
  .slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: "<img src='images/left.svg' class='prev' alt='1'>",
  nextArrow: "<img src='images/right.svg' class='next' alt='2'>",
  dots: false,
  focusOnSelect: false,
  infinite: false,
  asNavFor: '.slider-single-mob',
    });


    $('.slider-single-mob').on('afterChange', function(event, slick, currentSlide) {
 	$('.slider-nav-mob').slick('slickGoTo', currentSlide);
 	let currrentNavSlideElem = '.slider-nav-mob .slick-slide[data-slick-index="' + currentSlide + '"]';
 	$('.slider-nav-mob .slick-slide.is-active').removeClass('is-active');
 	$(currrentNavSlideElem).addClass('is-active');
 });

 $('.slider-nav-mob').on('click', '.slick-slide', function(event) {
 	event.preventDefault();
 	let goToSingleSlide = $(this).data('slick-index');
 	$('.slider-single-mob').slick('slickGoTo', goToSingleSlide);
 });
  /*validation forms */
  $("#myForm").validate({
    errorPlacement: function(error, element) {
      if (element.attr("name") == "agreement") {
          error.insertAfter(element.parent());
      } else {
          error.insertAfter(element);
      }
      return true;
  },
  ignore: ":disabled",
    rules: {
      surname: {
      required: true,
        },
        email: {
          required: true,
          email: true
        },
        name: {
      required: true,
        },
        phone: {
      required: true,
        minlength: 11
      },
      agreement: {
        required: true,
      },
      city:{
        required: true,
      },
      provider: {
        required: true,
      },
      sex:{
        required: true,
      }
      },
    messages: {
    name: {
      required: "Введите ваше имя",
      },
      surname: {
      required: "Введите вашу фамилию",
      },
      email: {
        required: "Введите Ваш адрес электронной почты",
        email: "Введите Ваш адрес электронной почты"
      },
      city:{
        required: "Выберите город",
      },
      provider: {
        required: "Выберите дилера",
      },
      phone:{
          required: "Введите контактный номер телефона",
          minlength: "Введите контактный номер телефона"
      },
      agreement: {
        required: "Предоставьте согласие на коммуникацию, чтобы дилер мог связаться с вами по вашему вопросу"
      },
      sex:{
        required: ""
      }
    },
  
  }); 
  $("#myFormFinish").validate({
    errorPlacement: function(error, element) {
      if (element.attr("name") == "agreement") {
          error.insertAfter(element.parent());
      } else {
          error.insertAfter(element);
      }
      return true;
  },
  ignore: ":disabled",
    rules: {
      email: {
        required: true,
        email: true
      },
      surname: {
      required: true,
        },
        name: {
      required: true,
        },
      city:{
        required: true,
      },
      provider: {
        required: true,
      },
      agreement: {
        required: true,
      },
      date: {
        required: true,
      }
      },
    messages: {
      email: {
        required: "Введите Ваш адрес электронной почты",
        email: "Введите Ваш адрес электронной почты"
      },
    name: {
      required: "Введите ваше имя",
      },
      surname: {
      required: "Введите вашу фамилию",
      },
      city:{
        required: "Выберите город",
      },
      provider: {
        required: "Выберите дилера",
      },
      agreement: {
        required: "Предоставьте согласие на коммуникацию, чтобы дилер мог связаться с вами по вашему вопросу"
      },
      date: {
        required: "Укажите дату тест-драйва",
      }
    },
  });

  $("#popUp").submit(function() {
    var form_data = $('#popUp').serialize();
    $.ajax({
        type: "POST",
        url: "",
        data: form_data,
        success: function() {  
          $('#popUp').html(' <div class="popup fancybox_window_message"><h3 class="popup__title popup__title_after"><strong>Спасибо</strong> за доверие! <br>Ожидайте сообщения от<br> дилерского центра. </h3><div class="verify-text modal-text"><h3 class="popup__title popup__title_second">Оставайтесь с нами! <br> <strong>Выбирайте автомобиль года</strong>, и голосуйте за него!</h3></div></div>');
          setTimeout(function() {
            window.location.href = 'https://autogoda.ru/cars/';
               }, 3000);
            $('#overlay, #popUp').on('click', function(){
              $('#popUp, #overlay').hide();
          });
        }
    });
  return false;
  });
  $("#popUpFinish").submit(function() {
    var form_data = $('#popUpFinish').serialize();
    $.ajax({
        type: "POST",
        url: "",
        data: form_data,
        success: function() {  
          $('#popUpFinish').html('<div class="popup fancybox_window_message"><h3 class="popup__title popup__title_after">Ваше сообщение <strong>отправлено!</strong><br> Ожидайте результатов розыгрыша призов. </h3><div class="verify-text modal-text"><h3 class="popup__title popup__title_second">Оставайтесь с нами! <br> <strong>Выбирайте автомобиль года</strong>, и голосуйте за него!</h3></div></div>');
          setTimeout(function() {
            window.location.href = 'https://autogoda.ru/cars/';
               }, 3000);
            $('#overlayFinish, #popUpFinish').on('click', function(){
              $('#popUpFinish, #overlayFinish').hide();
          });
        }
    });
  return false;
  });

// mask for phone (maskedinput)
$(function($){
  $('[name="phone"]').mask("+7 999 999 99 99");

});

//calendar
$( function() {
  $( "#datepicker" ).datepicker();
});

/* button up*/
$(document).ready(function() { 
  var button = $('#button-up');	
  $(window).scroll (function () {
    if ($(this).scrollTop()> 9500) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
});	 
button.on('click', function(){
$('body, html').animate({
scrollTop: 0
}, 800);
return false;
});		 
});
// button up mobyle
$(document).ready(function() { 
  var button = $('#button-up-mobyle');	
  $(window).scroll (function () {
    if ($(this).scrollTop()> 900) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
});	 
button.on('click', function(){
$('body, html').animate({
scrollTop: 0
}, 800);
return false;
});		 
});

//button textdrive pop up
$(document).ready(function() { 
  var button = $('#button-test-drive');	
  $(window).scroll (function () {
    if ($(this).scrollTop()> 9500) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
});	 	 
});

$(function(){
  $('.slider_easy_drop').bxSlider({
      mode: 'horizontal',
      captions: true,
      slideWidth: 950,
      maxSlides: 1,
      minSlides: 1,
      slideMargin: 30,
      moveSlides: 1,
      responsive: true,
      nextText: "<img src='./images/arrowright.svg' class='prevSlide' alt='1'>",
      prevText: "<img src='./images/arrowleft.svg' class='nextSlide' alt='1'>",  
  });
});
//for menu 

$(function(){
  $('.btn-menu').click(function(e){
    $('.mobyle_menu, .btn-menu').toggleClass('active');
  });
  
}); 
$('.btn-menu').on('click', function (e) {
  e.preventDefault();
  $('.mobyle_menu').fadeIn();
  $('body').addClass('body__scroll');
});
$('.close, .mobyle_menu a, .mobyle_menu').on('click', function (e) {
  e.preventDefault();
  $('.mobyle_menu').fadeOut();
  $('.mobyle_menu').removeClass('active');  
  $('body').removeClass('body__scroll');
});

$(".menu a, .mobyle_menu a").on("click", function (e) {
  e.preventDefault();
  var thishref=$(this).attr('href');
  if (thishref.length>1) {
    var $id = $($(this).attr('href'));
    if ($id.length) {
      $('body,html').animate({ scrollTop: $id.offset().top - 10 }, 1000);
    }
  }
});


//slider mobyle
$(function(){
  $('.slider_easy_drop').bxSlider({
      mode: 'horizontal',
      captions: true,
      slideWidth: 460,
      maxSlides: 1,
      minSlides: 1,
      slideMargin: 30,
      moveSlides: 1,
  });
});
//slider slidorion
$(document).ready(function() {
  $('#slidorion1').slidorion({
    speed: 1000,
    autoPlay: false,
    interval: 4000,
    effect: 'fade',
  });
});
$(document).ready(function() {
  $('#slidorion2').slidorion({
    speed: 1000,
    autoPlay: false,
    interval: 4000,
    effect: 'fade',
  });
});
$(document).ready(function() {
  $('#slidorion3').slidorion({
    speed: 1000,
    autoPlay: false,
    interval: 4000,
    effect: 'fade',
  });
});
$(document).ready(function() {
  $(".hmenu").click(function() {
    $("nav").toggleClass("show");
    $(this).toggleClass("showw");
  });
});

$(document).ready(function(){ 
    $('#single-slider-accordion').slick({ 
      dots: true,
      infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     initialSlide: 1,
     centerMode: true,
     respondTo: window,
     arrows: true,
     lazyLoad: 'ondemand',
    })

})
// scroll for rulles
$(document).ready(function() { 
  var button = $('#button-up-rulles');	
  $(window).scroll (function () {
    if ($(this).scrollTop()> -5) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
});	 
button.on('click', function(){
$('#popup1').animate({
scrollTop: 0
}, 200);
return false;
});		 
});


