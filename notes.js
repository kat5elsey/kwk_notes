Java Script Notes

Tool to check our javascript
- console.log ("insert variable here")
Note: User never sees this, only a developers tool

VARIABLE: defining an idea or quantity for the computer for it to remember
  *camelCase -- first word is lower case, first letter of second word is capitlized

Data Types:
1) "STRINGS": Must be put into quotes, represents text
    var harryStyles = "perfect human being";

2) Numbers: Do NOT have quotes, represents quantity or ammount, Can use operaters to perform math.
    var harryNumber = 1;
  a) < --> greater than or less than. Ex: 8>5
  b) +, -, * , / --> addition, subtraction, multiplication, division
  c) == or === ---> equal to
  d) <= or >= --> less than or equal to and greater than or equal to
  e) % --> remainder Ex: 16%3 computer will return 1 because that's the remainder of 16/3.

HOW TO USE NUMBER AND STRING VARIABLES

var dogName =  "Cricket";
var dogLeash = 1;
var poopBags = 2;
var waterBottles = 1;
var numItems = dogLeash + poopBags + waterBottles;

SUMMARY: 1) Broke down our problem into parts (variables), 2) Defined our variables, 3) Used our variables to perform a task

INTERPOLATION: Intagrating numerical values into strings using variables MUST USE BACKTICKS (`).

console.log(`Take ${dogName} on a walk! Don't forget to bring ${numItems} items!`)

ARRAYS: a list of strings and/or numbers. Represented using square brackets. First item, assigned an index number of 0.
  var arraySports = ["soccer", "basketball", "football", "discus", "diving"]

  console.log(arraySports[0]) --> "soccer"
  console.log(arraySports[4]) --> "diving"

  arraySports.length --> .length tells computer to print the number of items in an array

  arraySports.push("gymnastics") --> adds item to the end of an array

  arraySports.pop() --> removes the last item of an array

  jQuery (ELEMENT ASCESSORS):library of shortcuts we download onto our html page. link goes on second to last line of our body right above the javascript link.

    <script src="https://ajax.googleapis.com/ajax/libs//jquery/2.1.3/jquery.min.js"></script>

    EVENT HANDLERS (EVENT LISTENERS): tells the computer to listen to a certain area (often times a button) for a click. On the click, perform a function (action)

Define a specific area on HTML page using JQuery ($)
var dareButton = $('.darebutton');

area      listen for      action
dareButton.on('click', showDare);

another example:
dareButton.on('hover', showDare)

ADDING ELEMENTS TO WEBPAGE
1) Think of user experience? What do we want the user to see or do?
2) Create and area of <div> in my html page to add the Elements
3) Use jQuery -- $('nameofdiv') to tell computer where to look in my html file .
4) Create a function (action) to add the items to the html <div>
  a).text --> only adds the words without any html  formating CSS does NOT apply
  b).append --> adds html elemints to the html fil. MUST use BACKTICKS

Ex:
  var truthButton = $('.truthbutton');
  truthButton.on('click', showTruth);
  var truthContainer = $('.truthcontainer');

  function showTruth() {
    //choose a truth from array and then display
    truthContainer.text(arrayTruth[1]);
    truthContainer.append(arrayTruth[`<h2>${arrayTruth[3]}</h2>`]);
    truthContainer.append(`<img src="/Users/apple/Desktop/truth_dare_game/assets/image_1.jpg">`);
  }

CONDITIONALS

1) Define the condition (what do you want to be true?)
2) Determine the action if the user meets the condition
3) Determine the action if the user does not meet the condition
4) Conditionals exist in functions

if(condition){
  action if user meets the condition
}

else{
  action if user does not use the condition
}



if(userNumber > 7){
  container.append(`<img src = "">`)
}

else{
  container.append(`<p>Sorry, not Sorry!</p>`)
}
