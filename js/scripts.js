$(document).ready(function() {
  // when the button  is clicked
  $("#submit").submit(function() {
      
   

    // populate suggestion span
    $(".language").text(answer);

    // display suggestion
    $("#suggestion").show();
  });
}); 