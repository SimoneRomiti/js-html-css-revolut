$(document).ready(
  function(){

    $(".dropmenu").each(
      function(){
        var dropdown;
        var prova;

        $(this).mouseenter(
          function(){
            dropdown = $(this).children(".box-container");
            dropdown.fadeIn(400);
            prova = $(this).children("a");
            prova.css("color", "black");
          }
        );

        $(this).click(
          function(){
            dropdown = $(this).children(".box-container");
            dropdown.fadeToggle(400);
          }
        );

        $(this).mouseleave(
          function(){
            dropdown = $(this).children(".box-container");
            dropdown.fadeOut(400);
            prova = $(this).children("a");
            prova.css("color", "#607D6D");
          }
        );
      }
    );
  }
);
