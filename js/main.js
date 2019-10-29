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


