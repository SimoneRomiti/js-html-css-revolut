$(document).ready(
  function(){


    $(".dropmenu").each(function(){
      $(this).mouseenter(
        function(){
          var dropdown = $(this).children(".box-container");
          dropdown.fadeIn(400);

          $(this).click(function(){
            if(dropdown.css("display") == "block"){
              dropdown.fadeOut(400);
            } else if(dropdown.css("display") == "none"){
              dropdown.fadeIn(400);
              }
            }
          )
        }
      );

      $(this).mouseleave(
        function(){
          var dropdown = $(this).children(".box-container");
          dropdown.fadeOut(400);
        }
      );

    }
  );

  }
);
