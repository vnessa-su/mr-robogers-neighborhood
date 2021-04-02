// Business Logic
function numberToProcessedArray(number){
  let processedArray = [];
  for(let currentNumber = 0; currentNumber <= number; currentNumber++){
    let numberString = currentNumber.toString();
    if(numberString.includes("3")){
      processedArray.push("Won't you be my neighbor?");
    } else if(numberString.includes("2")){
      processedArray.push("Boop!");
    } else if(numberString.includes("1")){
      processedArray.push("Beep!");
    } else {
      processedArray.push(currentNumber);
    }
  }
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