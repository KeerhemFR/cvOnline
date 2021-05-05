// modal related in JQuery
$(document).ready(function(){
  // dice roll modal on / off
  $("#modal-1-open").on("click", function(){
    $("#modal-1").css("visibility","visible");
  });
  $("#modal-1-close").on("click", function(){
    $("#modal-1").css("visibility","hidden");
  });
})
