// Business Logic
function numberToProcessedArray(number){
  let processedArray = [0];
  console.log(processedArray);
  return processedArray;
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