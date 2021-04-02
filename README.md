# Mr. Roboger's Neighborhood

#### _{Brief description of application}, {Date of current version}_

#### By _**{List of contributors}***_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

#### To see my live website go to {GH_PAGES_LINK_HERE}!

## User Story

* _As a user I want to be able to..._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _VSCode_

## Setup/Installation Requirements

Software Requirements
1. Internet browser
2. A code editor like VSCode or Atom to view or edit the codebase.

Open by downloading:
1. Download this repository onto your computer by clicking the 'clone or download button'
2. Open the project folder.
2. Double click index.html to open it in your web browser

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`git clone {PUT_REPO_HERE}`
2. Navigate into the `{NAME_OF_DIRECTORY}` directory, and open in Visual Studio Code or preferred text editor
`code .`
3. Open index.html in Chrome or preferred browser


## Known Bugs

_No known bugs_

## Contact Information

_For any questions or comments, please reach out through GitHub._

### License

[MIT License](license)

Copyright (c) 2021 Vanessa Su

## Tests

***
### **Describe:** numberToProcessedArray()
***
#### **Test:** "It will return an array with only 0 in it if the input is 0."
#### **Code:** 
    const input = 0;
    numberToProcessedArray(input);
#### **Expected Output:** [0]
&nbsp;
#### **Test:** "It will return an array that contains the numbers 0 to 4, if the input is 4, with numbers 1, 2, 3 in the array replaced by strings according to the outlined rules."
#### **Code:** 
    const input = 4;
    numberToProcessedArray(input);
#### **Expected Output:** [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4]
&nbsp;
#### **Test:** "It will return an array that contains the numbers 0 to 23, with numbers containing the digits 1, 2, or 3 in the array replaced by strings according to the outlined rules."
#### **Code:** 
    const input = 23;
    numberToProcessedArray(input);
#### **Expected Output:** [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"]
&nbsp;
#### **Test:** "It will return an array the contains the number -4 to 0 if the input is -4."
#### **Code:** 
    const input = -4;
    numberToProcessedArray(input);
#### **Expected Output:** [-4, "Won't you be my neighbor?", "Boop!", "Beep!"]
&nbsp;