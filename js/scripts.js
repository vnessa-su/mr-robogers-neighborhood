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
  return processedArray;
}

function reverseArrayOrder(array){
  let reversedArray = [];
  array.forEach(function(element){
    reversedArray.unshift(element);
  });
  return reversedArray;
}

function removeInvalidNumbers(stringArray){
  const validNumbersArray = [];
  stringArray.forEach(function(element){
    let number = parseInt(element);
    if(number || number === 0){
      validNumbersArray.push(number);
    }
  });
  return validNumbersArray;
}

// User Interface Logic
$(document).ready(function(){
  $("#userInputForm").submit(function(event){
    event.preventDefault();

    const numberInput = $("input#numberInput").val().split(/[\s,]/);
    const nameInput = $("input#nameInput").val().trim();
    const reversedOrderSelected = $("input#reverseOrderCheckbox").prop("checked");

    const validNumberInputs = removeInvalidNumbers(numberInput);
    $("#resultsDisplay").empty();

    validNumberInputs.forEach(function(element){
      const outputStringArray = numberToProcessedArray(element, nameInput);
      if(reversedOrderSelected){
        let reversedArray = reverseArrayOrder(outputStringArray);
        $("#resultsDisplay").append(`<p><strong>${element}</strong>: ${reversedArray.join(", ")}</p>`);
      } else {
        $("#resultsDisplay").append(`<p><strong>${element}</strong>: ${outputStringArray.join(", ")}</p>`);
      }
    });
  });
});