$( document ).ready(function() {

  $( window ).scroll(function() {
    //navbar effect
    if(window.scrollY > 0){
      $( "#mynav" ).addClass("fixed-top");

      $( "#mynav" ).css("background-color", "rgba(0, 0,0, 0.9)");
      
    }else{
      $( "#mynav" ).removeClass("fixed-top");

      $( "#mynav" ).css("background-color", "rgba(0, 0,0, 0.3)");
    }



    
    
  });
  $('#advert').not('.scroll-wrapper').on("scroll", function(){
    console.log('content is scrolling');
});


});

