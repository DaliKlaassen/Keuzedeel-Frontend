$(document).ready(function() {
  setTimeout(function() {
  $(".text").removeClass("hidden")}, 1500);
  setTimeout(function() {
  $(".pink").css('textTransform', 'capitalize')}, 1500);
});

$("#lj1").on("click",function(){

    $(".btn").css("background-color", "#e62686");
    $("#lj1").css("background-color", "black");
    $(".table-bordered").css("display","none");
    $("#tlj1").css("display","inline");

});

$("#lj2").on("click",function(){

  $(".btn").css("background-color", "#e62686");
  $("#lj2").css("background-color", "black");
  $(".table-bordered").css("display","none");
  $("#tlj2").css("display","inline");

});

$("#lj3").on("click",function(){

  $(".btn").css("background-color", "#e62686");
  $("#lj3").css("background-color", "black");
  $(".table-bordered").css("display","none");
  $("#tlj3").css("display","inline");

});
