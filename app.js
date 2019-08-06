var pics = ["img/alex.jpg",
"img/bat.jpg",
"img/banksy2.jpg",
"img/dog.jpg",
"img/cn.jpg",
"img/duck.jpg",
"img/taco.jpg",
"img/horde.jpg",
"img/ribs.jpg",
"img/triforce.png"]
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
}
