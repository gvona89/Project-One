/*correct=[
"mercedes",
"audi",
"lexus",
"tesla",
"bat",
"duck",
"bull",
"dog",
"taco",
"ribs",
"pizza",
"steak",
"cartoon network",
"world of warcraft",
"legend of zelda",
"mortal kombat",
"india",
"kenya",
"UAE",
"iraq"]
 if(answer !== correct){
    ('#bank') - (#amt)
     }
    else{ ('#amt') +('#bank')
    }
 Number.parseFloat()
 

 
 Noah's code solution for atm
    const getInputAmount = (inputElem) => {
  //parse input and return the amount as pennies
  let num = Math.floor(Number.parseFloat(inputElem.value)*100)
  
  let amt = Number.parseFloat(#amt.value)

​
  if(num < 0 || !num)
    return 0;
​
  return num;
}


object.onclick = function(){myScript};

working w supriya

    let bank = 0     

    grab the element in the 'amt' tag when any of 4 answer buttons are clicked
    
    let answerSelect = document.getElementById(answers)
    
    if the answer selected is not equal to the any answer in the array of correct answers then 
    
    if (answerSelect !== to correct){
    
        return "Incorrect" prompt and subtract 'amt' value to 'bank' (score) value
    
        alert("Incorrect")
    
        bank -= 'amt'
             }
    
             else  return "Correct" prompt & add 'amt' value to 'bank' (score) value







*/
// let bank = parseFloat(document.getElementbyId("bank").innerHTML);
// console.log(bank);

// img array
var pics =
// auto category
["img/merc.png",
"img/audi.png",
"img/lexus.jpg",
"img/tesla.jpg",
// animal category
"img/bat.jpg",
"img/duck.jpg",
"img/bull.jpg",
"img/dog.jpg",
// food category
"img/taco.jpg",
"img/ribs.jpg",
"img/pizza.jpg",
"img/steak.jpeg",
// media category
"img/cn.jpg",
"img/horde.jpg",
"img/triforce.png",
"img/mk.jpg",
// flag category
"img/india.jpg",
"img/kenya.jpg",
"img/uae.jpg",
"img/iraq.jpeg",]

// answers:
var answerA = 
// auto category
["Ferrari",
"Audi",
"Lotus",
"Toyota",
// animal category
"Fox",
"Duck",
"Bull",
"Rhino",
// food category
"Chili",
"Ribs",
"Quiche",
"Porkloin",
// media category
"Nickelodeon",
"World of Warcraft",
"Fallout",
"Mortal Kombat",
// flag category
"Pakistan",
"Kenya",
"Oman",
"Iran",
]
var answerB = 
// auto category
["Porsche",
"Infinity",
"Lincoln",
"BMW",
// animal category
"Rat",
"Sparrow",
"Ox",
"Wolf",
// food category
"Quesadilla",
"Potato",
"Pizza",
"Steak",
// media category
"Cartoon Network",
"Minecraft",
"Donkey Kong",
"Tekken",
// flag category
"Bengladesh",
"Ethiopia",
"Somalia",
"Iraq",
]
var answerC = 
// auto category
["Mercedes",
"Acura",
"Landrover",
"Mclaren",
// animal category
"Bat",
"Woodpecker",
"Rhino",
"Dog",
// food category
"Burrito",
"Chicken",
"Pot Pie",
"Cucumber",
// media category
"PBS",
"Spacecraft",
"Final Fantasy",
"Tomb Raider",
// flag category
"India",
"Ghana",
"Yemen",
"Saudi Arabia",
]
var answerD = 
// auto category
["Mclaren",
"Mercedes",
"Lexus",
"Tesla",
// animal category
"Seagull",
"Beaver",
"Elephant",
"Squirrel",
// food category
"Taco",
"Pickles",
"Salad",
"Liver",
// media category
"Warner Bros",
"Diablo",
"Legend of Zelda",
"Dugeons and Dragons",
// flag category
"Malaysia",
"Chad",
"UAE",
"Pakistan",
]
// assigns category
var cat = ["Cars", "Cars", "Cars", "Cars",
"Animals", "Animals", "Animals", "Animals", 
"Food", "Food", "Food", "Food", 
"Games", "Games", "Games", "Games", 
"Flags",  "Flags",  "Flags",  "Flags"]
var amt = [100, 200, 300, 400,
    100, 200, 300, 400,
    100, 200, 300, 400,
    100, 200, 300, 400,
    100, 200, 300, 400,]
    

// slide show function
var imagesLength = pics.length - 1; 
//assign the length of the array minus 1 to the variable imagesLength
var currentSlide = 0;

let changePic = (x) => {

currentSlide += x;
//if position of the slide show reached the length of # of pics in show, go back to first slide @ position in array 0
if(currentSlide > imagesLength){

    currentSlide = 0
}
//go to the end of the slide show
if(currentSlide < 0){

    currentSlide = imagesLength
}
//grab the pic in html and change source to current slide is set  in the array of pics
document.getElementById("pic").src = pics[currentSlide]
document.getElementById("amt").innerHTML = amt[currentSlide]
document.getElementById("cat").innerHTML = cat[currentSlide]
document.getElementById("ai").innerHTML = answerA[currentSlide]
document.getElementById("bi").innerHTML = answerB[currentSlide]
document.getElementById("ci").innerHTML = answerC[currentSlide]
document.getElementById("di").innerHTML = answerD[currentSlide]
}
// end slideshow



