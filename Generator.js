
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
  }
 // version 0.1
//maximum value should be set with in the function being called but to have some simplicity ill add it here (replace the 10 with what ever) 

var maximumValue = 1000

// this variables name should explain what it does if it doesnt you proably shouldnt be here (replace the 1 aswell)
var numberOfTimesYouWantItToRepeat = 100
  
  
var x = 0
while(x<numberOfTimesYouWantItToRepeat){
var num1 = getRandomInt(maximumValue);
console.log(num1)
x = x+1
}

// made with hate for this application (Scriptable on IoS)


