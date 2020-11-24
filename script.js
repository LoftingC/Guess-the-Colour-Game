
function setButtonColour(button, red, green, blue){
    button.setAttribute('style',
                        'background-color: rgb('+ red +','+ green +','+ blue +');'
                       );
}

function makeColourValue(){
    return Math.round(Math.random()*255);
}
var heading = document.getElementById("colourValue");
var buttons = document.getElementsByClassName('colourButton');

function startGame() {
  

  
var answerMessage = document.getElementById('answer');
var answerButton = Math.round(Math.random() * (buttons.length - 1));

answerMessage.innerHTML = "";

for (var i = 0; i < buttons.length; i++){
  
var red = makeColourValue();
var green = makeColourValue();
var blue = makeColourValue();

setButtonColour(buttons[i], red, green, blue);

if ( i === answerButton) {
heading.innerHTML = `( ${red}, ${green}, ${blue} )`; 
}

buttons[i].addEventListener('click', function(){
  if(this === buttons[answerButton]) {
      answerMessage.innerHTML = "Correct";
    } else {
      answerMessage.innerHTML = "Wrong answer! Guess again!";
    }
  
   });
 }
document.getElementById('resetButton').addEventListener('click', startGame);

}

startGame();


