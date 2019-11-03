$(function(){
  'use strict';
  //trigger nice scroll
  $('html').niceScroll();

//change header height



$('.header').height($(window).height());
});
///menu


  $('.toggle-nav').click(function(){
    $('.full-scr-nav').show();
    $(this).fadeOut();
  });

  $('.dismiss').click(function(){
      $('.full-scr-nav').slideUp();
      $('.toggle-nav').fadeIn();
  


});
  /*scroll top*/
   $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  });

  $('.scroll-top').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 100);
      return false;
  });
  /*scroll own*/




