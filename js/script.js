$(document).ready(
  function(){

    $(".dropmenu").each(
      function(){
        var dropdown;

        $(this).mouseenter(
          function(){
            dropdown = $(this).children(".box-container");
            dropdown.fadeIn(400);
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
          }
        );
      }
    );
  }
);
