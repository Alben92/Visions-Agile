

$(document).ready(function() {

  $(".navbar-toggler").on("click", cambiarContenido);
  function cambiarContenido() {
    $(".navbar-main").addClass("menu-responsive");
  };

  // SCROLL ANIMATION - Linkeado con el plugin

  var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
      speedAsDuration: true
    });  
});  

// MENU MODIFICABLE

$(window).scroll(function() {    
    posicionarMenu();
});
 
function posicionarMenu() {
    var altura_del_header = $('.site-header').outerHeight(true);
    var altura_del_menu = $('.menu-principal').outerHeight(true);
 
    if ($(window).scrollTop() >= altura_del_header){
        $('.menu-principal').addClass('menu-slide');
        $('.menu-principal').removeClass('menu');
    } else {
        $('.menu-principal').removeClass('menu-slide');
        $('.menu-principal').addClass('menu');
    }
};







    