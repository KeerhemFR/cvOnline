// modal related in JQuery
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true,
              loop:true,
          },
          600:{
              items:1,
              nav:true,
              loop:true,
          },
          1000:{
              items:1,
              nav:true,
              loop:true,
          }
      }
  })  // dice roll modal on / off
  $("#modal-1-open").on("click", function(){
    $("#modal-1").css("visibility","visible");
  });
  $("#modal-1-close").on("click", function(){
    $("#modal-1").css("visibility","hidden");
  });
})
