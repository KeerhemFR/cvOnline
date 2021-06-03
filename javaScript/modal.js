// modal related in JQuery
$(document).ready(function(){
  // owl carousel
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
  });
  // dice roll modal on / off
  $("#modal-1-open").on("click", function(){
    $("#modal-1").css("visibility","visible");
  });
  $("#modal-1-close").on("click", function(){
    $("#modal-1").css("visibility","hidden");
  });
  // loterie modal on / off
  $("#modal-2-open").on("click", function(){
    $("#modal-2").css("visibility","visible");
  });
  $("#modal-2-close").on("click", function(){
    $("#modal-2").css("visibility","hidden");
  });
  // affiche pub modal on / off
  $("#modal-3-open").on("click", function(){
    $("#modal-3").css("visibility","visible");
  });
  $("#modal-3-close").on("click", function(){
    $("#modal-3").css("visibility","hidden");
  });
  // icone logo ai on / off
  $("#modal-4-open").on("click", function(){
    $("#modal-4").css("visibility","visible");
  });
  $("#modal-4-close").on("click", function(){
    $("#modal-4").css("visibility","hidden");
  });
  // brochure atelier numerique on / off
  $("#modal-5-open").on("click", function(){
    $("#modal-5").css("visibility","visible");
  });
  $("#modal-5-close").on("click", function(){
    $("#modal-5").css("visibility","hidden");
  });
})
