// Business Logic
function numberToProcessedArray(number){
  const numberReplacementStrings = ["Beep!", "Boop!", "Won't you be my neighbor?"]
  let processedArray = [];
  let startNumber = 0;
  let endNumber = number;
  if(number < 0){
    startNumber = number;
    endNumber = 0;
  }
  for(let currentNumber = startNumber; currentNumber <= endNumber; currentNumber++){
    let numberString = currentNumber.toString();
    if(numberString.includes("3")){
      processedArray.push(numberReplacementStrings[2]);
    } else if(numberString.includes("2")){
      processedArray.push(numberReplacementStrings[1]);
    } else if(numberString.includes("1")){
      processedArray.push(numberReplacementStrings[0]);
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

    const numberInput = parseInt($("input#numberInput").val(), 10);
    console.log(numberInput);
    const outputStringArray = numberToProcessedArray(numberInput);
    $("#resultsDisplay").text(outputStringArray);
  });
});