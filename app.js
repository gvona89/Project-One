
// start slideshow
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
"img/iraq.jpeg",
]
var answerA = 
// auto category
["Ferrari",
"Audi",
"Honda",
"Toyota",
// animal category
"Bat",
"Duck",
"Bull",
"Rhino",
// food category
"Chili",
"Ribs",
"Quiche",
"Steak",
// media category
"Nickelodeon",
"Horde",
"Fallout",
"Mortal Kombat",
// flag category
"Pakistan",
"Kenya",
"Saudi Arabia",
"Iran",
]
var answerB = 
// auto category
["Porsche",
"Infinity",
"Jeep",
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
"Horde",
"Triforce",
"Mortal Kombat",
// flag category
"India",
"Kenya",
"UAE",
"Iraq",
]
var answerC = 
// auto category
["Mercedes",
"Acura",
"Hyundai",
"Tesla",
// animal category
"Bat",
"Duck",
"Bull",
"Dog",
// food category
"Burrito",
"Chicken",
"Pizza",
"Steak",
// media category
"Cartoon Network",
"Horde",
"Triforce",
"Mortal Kombat",
// flag category
"India",
"Kenya",
"UAE",
"Iraq",
]
var answerD = 
// auto category
["Mclaren",
"Mercedes",
"Lexus",
"Tesla",
// animal category
"Bat",
"Duck",
"Bull",
"Dog",
// food category
"Taco",
"Pickles",
"Pizza",
"Steak",
// media category
"Cartoon Network",
"Horde",
"Triforce",
"Mortal Kombat",
// flag category
"India",
"Kenya",
"UAE",
"Iraq",
]
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
document.getElementById("ai").innerHTML = answerA[currentSlide]
document.getElementById("bi").innerHTML = answerB[currentSlide]
document.getElementById("ci").innerHTML = answerC[currentSlide]
document.getElementById("di").innerHTML = answerD[currentSlide]
}
// end slideshow
