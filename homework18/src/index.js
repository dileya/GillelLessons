import "./styles.sass";
var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");

btn.addEventListener("click", function (){
  var randomDog = new XMLHttpRequest ();

  randomDog.onreadystatechange =function(){
    if(randomDog.readyState == 4 && randomDog.status == 200 ) {     var url = JSON.parse(randomDog.responseText).url;
    img.src = url;
  }
 } 
  randomDog.open("GET","  https://random.dog/woof.json")
  randomDog.send();
})