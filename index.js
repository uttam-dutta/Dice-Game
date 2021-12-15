var random1 = Math.floor(Math.random() * 6) + 1;

var random2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "images/dice"+random1+".png";

var randomImage2 = "images/dice"+random2+".png";

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);

var res = document.querySelector("h1");
if(random1>random2) {
  res.innerText="Player 1 Won! ✌";
}
else if(random1<random2) {
  res.innerText="Player 2 Won! ✌";
}
else {
  res.innerText="Draw!";
}
