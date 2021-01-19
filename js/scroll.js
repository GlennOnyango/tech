$( document ).ready(function() {

  $( window ).scroll(function() {
    //navbar effect
    if(window.scrollY > 0){
      $( "#mynav" ).addClass("fixed-top");
    }else{
      $( "#mynav" ).removeClass("fixed-top");
    }



    
    
  });
  $('#advert').not('.scroll-wrapper').on("scroll", function(){
    console.log('content is scrolling');
});


});

