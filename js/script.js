$(function() {

$("#portfolio-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 500);
});
$("#contact-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 500);
});
$("#about-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 500);
});
