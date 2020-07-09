$(document).ready(function(){

  // ----  DROPDOWN DELLA NAVBAR PRINCIPALE -----

  $(".links-wrapper .main-dropdown").mouseenter(function(){ // mouse entra sul li con classe main-dropdown e do funzione show ai figli con classe main-dropdown-content
    $(this).children(".main-dropdown-content").show();
  });

  $(".links-wrapper .main-dropdown").mouseleave(function(){ // mouse esce dal li con classe main-dropdown e do funzione hide ai figli con classe main-dropdown-content
    $(this).children(".main-dropdown-content").hide();
  });

  // ----- PICCOLO ESPERIMENTO -------

  //quando c'è il focus sull'input numero di telefono mostro la label corrispondente. .focus() e .focusout() funzionano tipo mauseenter e mouseleave.

  $("input[name=\"numerocel\"]").focus(function(){
    $("label[for=\"numerocel\"]").fadeIn();
  });

  $("input[name=\"numerocel\"]").focusout(function(){
    $("label[for=\"numerocel\"]").fadeOut();
  });

  // --------  MENU HAMBURGER  --------


  // apertura e chiusura menu HAMBURGER

  $(".hamburger-button").click(function(){
    $("#hamburger-menu").fadeIn();
  });

  $("#hamburger-top-bar i.fa-times").click(function(){
    $("#hamburger-menu").fadeOut();
  });


  // toggle dei links

  $(".hamburger-links .links-title").click(function(){

    //istruzioni per chiudere le altre liste links aperte. azzerare colori e icone up down

    var tutteListeTranneCliccata = $(".hamburger-links .links-title").not(this); // .not() esclude dalla selezione l'elemento argomento della funzione. In questo caso sto selezionando tutte le liste di link tranne quella cliccata. Azzero tutte le altre liste poi per quella cliccata ci sono una serie di istruzioni da eseguire dopo
    tutteListeTranneCliccata.children("h3").removeClass("text-black");
    tutteListeTranneCliccata.children("i").removeClass("fa-angle-up").addClass("fa-angle-down");
    tutteListeTranneCliccata.next("ul").slideUp();


    // serie di cambiamenti sulla lista cliccata
    $(this).next("ul").slideToggle(); // mostro e nascondo i links cliccati
    $(this).children("h3").toggleClass("text-black"); // coloro di nero il titolo delle liste di link aperti
    $(this).children("i").toggleClass("fa-angle-down").toggleClass("fa-angle-up"); // l'icona con la freccina fa su e giu all'apertura/chiusura

  });


  // Gestione delle navbar superiori allo scroll

  $(window).scroll( function(){ // event listener su lo scroll della finestra (si può fare anche uno scroll su un elemento)

    if ($(window).scrollTop() > 60) { // quando la finestra scrolla dall'alto 60 px (che è l'altezza della barra superiore grigia compresa di 10px di padding sopra e sotto) aggiunge una classe che da fixed alla barra sotto.
      $("#header-main-nav").addClass("scroll-fixed");
    }

    if ($(window).scrollTop() < 60) { // al contrario toglie la classe
      $("#header-main-nav").removeClass("scroll-fixed");
    }




  });

});
