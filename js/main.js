$(document).ready(function () {
  $("#searchBtn").click(function () {
    $(".searchBox").addClass("active");
    $(".closeBtn").addClass("active");
    $(".searchBtn").addClass("active");
    $(".login").addClass("active");
    $(".menuToggle").addClass("hide");
  });
  $("#slide1").click(function () {
    $(".slide-1").addClass("active");
  });
  $("#closeBtn").click(function () {
    $(".searchBox").removeClass("active");
    $(".closeBtn").removeClass("active");
    $(".searchBtn").removeClass("active");
    $(".login").removeClass("active");
    $(".menuToggle").removeClass("hide");
  });
  $("#menuToggle").click(function () {
    $("header").toggleClass("open");
    $(".closeBtn").removeClass("active");
    $(".searchBtn").removeClass("active");
    $(".menuToggle").removeClass("hide");
  });
});
