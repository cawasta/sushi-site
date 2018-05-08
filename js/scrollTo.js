$('a.scrollTo').on('click', function (){

  var scrollTo = $(this).attr('data-scrollTo');

  $("a.scrollTo").each(function() {
    if(scrollTo == $(this).attr('data-scrollTo')){
      $(this).addClass('active');
    }else{
      $(this).removeClass('active');
    }
  });

  $('body, html').animate({
    "scrollTop": $('.' +scrollTo).offset().top-72
  }, 1000);
  return false;
});
