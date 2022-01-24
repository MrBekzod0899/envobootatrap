
let width = document.getElementById("width");
let heigth = document.getElementById("height");
let backColor = document.getElementById("color");
let rectangle = document.getElementById("rectangle");
let surface = document.getElementById("surface");
let peremetr = document.getElementById("peremetr");
function rectangleDraw() {
   let a,b;
   a = parseFloat(width.value);
   b = parseFloat(heigth.value);
   rectangle.style.width = a + "px";
   rectangle.style.height = b + "px";
   rectangle.style.backgroundColor = backColor.value;
   surface.innerText = "to'rtburchak yuzi : " + (a*b);
   peremetr.innerText = "to'rtburchak peremetri : " + 2*(a+b);
}



document.getElementById("btn").addEventListener("click",function () {
    let allNumbers = document.querySelectorAll("td");
    for (let i = 0; i < allNumbers.length; i++) {
        let count = 0;
        for (let j = 3; j < Math.sqrt(parseInt(allNumbers[i].innerText)); j+=2) {
            if (parseInt(allNumbers[i].innerText) % j === 0 || allNumbers[i].innerText % 2 === 0)
                count++;
            if (count === 1)
                break;
        }
        if (count === 0){
            allNumbers[i].style.backgroundColor = "green";
            allNumbers[i].style.color = "white";
        }
    }
});

