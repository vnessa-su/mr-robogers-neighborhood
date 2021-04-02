// Business Logic
function numberToProcessedArray(number, name){
  let processedArray = [];
  let numberReplacementStrings = ["Beep!", "Boop!", "Won't you be my neighbor?"]
  let startNumber = 0;
  let endNumber = number;

  if(name){
    numberReplacementStrings[2] = "Won't you be my neighbor, " + name + "?";
  }

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

function reverseArrayOrder(array){
  let reversedArray = [];
  array.forEach(function(element){
    reversedArray.unshift(element);
  });
  return reversedArray;
}
// User Interface Logic
$(document).ready(function(){
  $("#userInputForm").submit(function(event){
    event.preventDefault();

    const numberInput = parseInt($("input#numberInput").val(), 10);
    const nameInput = $("input#nameInput").val().trim();
    const reversedOrderSelected = $("input#reverseOrderCheckbox").prop("checked");
    console.log(numberInput);
    console.log(nameInput);
    console.log(reversedOrderSelected);
    const outputStringArray = numberToProcessedArray(numberInput, nameInput);
    $("#resultsDisplay").text(outputStringArray);
  });
});