$(document).ready(function(){

  // dropdown link della barra di navigazione principale header-main-nav
  $(".links-wrapper .main-dropdown").mouseenter(function(){ // mouse entra sul li con classe main-dropdown e do funzione show ai figli con classe main-dropdown-content
    $(this).children(".main-dropdown-content").show();
  });

  $(".links-wrapper .main-dropdown").mouseleave(function(){ // mouse esce dal li con classe main-dropdown e do funzione hide ai figli con classe main-dropdown-content
    $(this).children(".main-dropdown-content").hide();
  });
});
