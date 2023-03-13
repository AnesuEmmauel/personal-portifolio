const x = document.getElementById("name");
let b = x.innerText;
newX = b.split("");
let empty = []

let red = Math.round(Math.random() * 255);
let green = Math.round(Math.random() * 255);
let blue = Math.round(Math.random() * 255);

let color = [red, green, blue];
joinedColor = color.join()
const n = "rgb" + "(" + red + "," + green + "," + blue + ")";

for (let i = 0; i < newX.length; i++){
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    let color = [red, green, blue];
    joinedColor = color.join()
    const n = "rgb" + "(" + red + "," + green + "," + blue + ")";

    empty.push(`<span "id="${newX[i]}"
    onmouseover="this.style.color='${n}'; this.style.fontSize='70px'"
    onmouseout="this.style.color='black'; this.style.fontSize='50px'"
    >${newX[i]}</span>`);
}
const test = empty.join("");
x.innerHTML = test;
console.log(test);
