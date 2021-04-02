// Business Logic
function numberToProcessedArray(number){
  return number;
}

// User Interface Logic
$(document).ready(function(){
  $("#userInputForm").submit(function(event){
    event.preventDefault();

    const numberInput = parseInt($("input#numberInput").val());
    const outputStringArray = numberToProcessedArray(numberInput);
    $("#resultsDisplay").text(outputStringArray);
  });
});