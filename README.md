# Mr. Roboger's Neighborhood

#### A webpage that prompts the user to enter in a number or numbers, and then an array is displayed per number with numbers containing 1, 2, or 3 replaced with strings.

#### By Vanessa Su

## Description

Epicodus Intro Week 3 Project

This webpage asks the user to input a number or set of numbers separated by a space or comma. There is also an input section for a name and an checkbox to reverse the array order, both of which are optional. Then an array of numbers per number, ranging from 0 to the input number except for that numbers containing the digit 1, 2, or 3 are replaced by strings according to the following rules, in order of priority:
1. If the number contains a 3, replace it with "Won't you be my neighbor?" or "Won't you be my neighbor, {name}?" if a name was submitted
2. If the number contains a 2, replace it with "Boop!"
3. If the number contains a 1, replace it with "Beep!"

If the Reverse Order checkbox is selected, the numbers or associated string will be ordered from high to low, otherwise they will be ordered from low to high.

#### To see my live website go to [https://vnessa-su.github.io/mr-robogers-neighborhood/](https://vnessa-su.github.io/mr-robogers-neighborhood/)!

## User Story

* Optionally enter a name
* Enter in a number or set of numbers
* Optionally select the Reverse Order checkbox
* Press the Submit button
* See results for all valid number inputs under the form
* Repeat the process without reloading the page

## Technologies Used

* HTML
* CSS
* JavaScript
* VSCode

## Setup/Installation Requirements

Software Requirements:
* Web browser
* Code/text editor

View/edit webpage locally:
1. Download or clone this repository to your computer
    * To download, click the Code button and select Download ZIP
    * To clone, use: `git clone https://github.com/vnessa-su/mr-robogers-neighborhood.git`
2. Navigate to the `/mr-robogers-neighborhood` directory
3. Double click index.html to open it in your web browser or open in your code editor to modify

## Known Bugs

_No known bugs_

## Contact Information

For any questions or comments, please reach out through GitHub.

## License

[MIT License](license)

Copyright (c) 2021 Vanessa Su

## Tests

***
### **Describe:** numberToProcessedArray()
***

### **Test:** "It will return an array with only 0 in it if the input number is 0."
### **Code:** 
    const inputNumber = 0;
    numberToProcessedArray(inputNumber);
### **Expected Output:** [0]
&nbsp;

### **Test:** "It will return an array that contains the numbers 0 to 4, if the input number is 4, with numbers 1, 2, 3 in the array replaced by strings according to the outlined rules."
### **Code:** 
    const inputNumber = 4;
    numberToProcessedArray(inputNumber);
### **Expected Output:** [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4]
&nbsp;

### **Test:** "It will return an array that contains the numbers 0 to 23, if the input number is 23, with numbers containing the digits 1, 2, or 3 in the array replaced by strings according to the outlined rules."
### **Code:** 
    const inputNumber = 23;
    numberToProcessedArray(inputNumber);
### **Expected Output:** [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"]
&nbsp;

### **Test:** "It will return an array the contains the numbers -4 to 0, if the input number is -4, with numbers containing the digits 1, 2, or 3 in the array replaced by strings according to the outlined rules."
### **Code:** 
    const inputNumber = -4;
    numberToProcessedArray(inputNumber);
### **Expected Output:** [-4, "Won't you be my neighbor?", "Boop!", "Beep!"]
&nbsp;

### **Test:** "If a name is input, it will include the name in the number 3 string replacement."
### **Code:** 
    const inputNumber = 4;
    const inputName = "Vanessa";
    numberToProcessedArray(inputNumber, inputName);
### **Expected Output:** [0, "Beep!", "Boop!", "Won't you be my neighbor, Vanessa?", 4]
&nbsp;

***
### **Describe:** reverseArrayOrder()
***

### **Test:** "It will return the same array if the input only has one element in it."
### **Code:** 
    const inputArray = [0];
    numberToProcessedArray(inputNumber);
### **Expected Output:** [0]
&nbsp;

### **Test:** "It will return a multi-element array that is in the reverse order of the multi-element input array."
### **Code:** 
    const inputArray = [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4];
    reverseArrayOrder(inputArray);
### **Expected Output:** [4, "Won't you be my neighbor?", "Boop!", "Beep!", 0]
&nbsp;

***
### **Describe:** removeInvalidNumbers()
***

### **Test:** "It will return an array of numbers only if non-numeric strings are in the input."
### **Code:** 
    const inputArray = ["4", "6", "banana", "13", "-5", "",];
    removeInvalidNumbers(inputArray);
### **Expected Output:** [4, 6, 13, -5]
&nbsp;

### **Test:** "It will return an array of numbers and float elements will be truncated down to integers."
### **Code:** 
    const inputArray = ["4", "6", "27.8", "13", "-5"];
    removeInvalidNumbers(inputArray);
### **Expected Output:** [4, 6, 27, 13, -5]
&nbsp;