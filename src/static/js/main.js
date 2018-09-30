$(document).ready(function(){
  $('body').css('overflow','hidden')
  $('#loader').css('height','110%').delay(900).fadeOut(2000,function(){
    $('body').css('overflow','unset');
  });

  $('.navbar-collapse.collapse').click(function(e){
    $('.navbar-toggle').click();
  })
});
  