$(document).ready(
  function(){


    $(".dropmenu").each(function(){
      $(this).mouseenter(
        function(){
          var dropdown = $(this).children(".box-container");
          dropdown.fadeIn(400);
      });

      $(this).mouseleave(
        function(){
          var dropdown = $(this).children(".box-container");
          dropdown.fadeOut(400);
      });

    }
  );

  }
);
