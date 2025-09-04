//Selecion por ID
let mainTitle = document.getElementById("main-title");
console.log(mainTitle);

console.log(mainTitle.innerText);
mainTitle.innerText = "TITULO CAMBIADO" ;
console.log(mainTitle.innerText)
//seleccion por clase
let mainText = document.getElementsByClassName("main-text");
//indexar 
console.log(mainText[0].innerText);
console.log(mainText[1].innerText);
console.log(mainText[2].innerText);
mainText[0].innerText = "Hola mundo"
//Selecion por etiqueta
let titles = document.getElementsByTagName("h2");
console.log(titles);
console.log(titles[2].innerText);

let queryMainTitle = document.querySelector("#main-title");
console.log(queryMainTitle)

let queryMainText = document.querySelectorAll(".main-text")
console.log(queryMainText)
console.log(queryMainText[1].innerText)

document.getElementById("clicker").addEventListener("click", function(){
    console.log("HAZ HECHO CLICK EN ESTE BOTON")
});