$(document).ready(function() {
  $("#button").click(function(event) {
    event.preventDefault();
    let option1 = $("#true1")[0].selected;
    let option2 = $("#true2")[0].selected;
    let option5 = $("#true5")[0].selected;
    let answer;
    
    if (option1 === true && option2 === false) {
      answer = "JavaScript";
    } else if (option2 === true && option1 === true) {
      answer = "MATLAB";
    } else{
      answer = "Python";
    } 
    $(".language").text(answer);
    $("#suggestion").show();  
  });
}); 