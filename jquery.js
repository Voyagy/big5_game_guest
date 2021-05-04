$(function(){
  $('.guest-action').children('.title').click(function(){
     var $question =  $(this).parent().find('.questions');
     if($question.hasClass('show')){
       $question.removeClass('show');
       $question.slideUp();
     }else {
       $question.addClass('show')
       $question.slideDown();
     }
  });
  $('.results').children('.result').click(function(){
    var $result = $(this);
    if($result.hasClass('pickup')){
      $result.removeClass('pickup');
      $result.css('height', '94px')
      $result.children('p').css('font-size', '100%');
      $result.children('.result-num').css('font-size', '26px');
      $('.result').show();
      $('.result-wrapper').css('height', 'auto')
    }else{
      $('.result').hide();
      $result.addClass('pickup');
      $result.show();
      $result.css('height', '300%');
      $result.children('p').css('font-size', '300%');
      $result.children('.result-num').css('font-size', '300%');
      $('.result-wrapper').css('height', '721px')
    }
  });
  $('#setup').click(function(){
    var $resultWrap = $('.result-wrapper');
    if($resultWrap.hasClass('fade')){
      $resultWrap.removeClass('fade');
    }else{
      $resultWrap.addClass('fade');
      $resultWrap.fadeIn();
    }
  });
  $('.x').click(function(){
    var $resultWrap = $('.result-wrapper');
    if($resultWrap.hasClass('fade')){
      $resultWrap.removeClass('fade');
      $resultWrap.fadeOut();
    }else{
      $resultWrap.addClass('fade');
    }
  });
});
