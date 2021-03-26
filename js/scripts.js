$(document).ready(function() {
  // when the button  is clicked
  $("#ok").click(function(event) {
    event.preventDefault();
    // find which options were selected
    // get all of the options
    let option1 = $("#true1")[0].selected;
    let option2 = $("#true2")[0].selected;
    let option3 = $("#true3")[0].selected;
    let option4 = $("#true4")[0].selected;
    let option5 = $("#true5")[0].selected;

    let option6 = $("#false1")[0].selected;
    let option7 = $("#false2")[0].selected;
    let option8 = $("#false3")[0].selected;
    let option9 = $("#false4")[0].selected;
    let option10 = $("#false5")[0].selected;
   
    let answer;
    
    if (option1 === false) {
      answer = "JavaScript";
    } else if (option2 === true) {
      answer = "C#";
    } else if (option3 === true) {
      answer = "Python";
    } 
    
    $(".language").text(answer);
    $("#suggestion").show();  
  });
}); 