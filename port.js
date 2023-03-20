const x = document.getElementById("name");
let b = x.innerText;
newX = b.split("");
let empty = []

//i used the code bellow to generate random colors
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

//this is the Beginning of skills icons
const skillsStorage = [
    {
        "name" : "bootstrap-icon",
        "path" : "images/bootstrap-fill-svgrepo-com.svg"
    },
    {
        "name" : "codepen-icon",
        "path" : "images/codepen-svgrepo-com.svg"
    },
    {
        "name" : "css-icon",
        "path" : "images/css-3-svgrepo-com.svg"
    },
    {
        "name" : "d3-icon",
        "path" : "images/d3-dot-js-svgrepo-com.svg"
    },
    {
        "name" : "github-icon",
        "path" : "images/github-color-svgrepo-com.svg"
    },
    {
        "name" : "html-icon",
        "path" : "images/html-5-svgrepo-com.svg"
    },
    {
        "name" : "javascript-icon",
        "path" : "images/javascript-svgrepo-com.svg"
    },
    {
        "name" : "jquery-icon",
        "path" : "images/jquery-svgrepo-com.svg"
    },
    {
        "name" : "react-icon",
        "path" : "images/react-javascript-js-framework-facebook-svgrepo-com.svg"
    },
    {
        "name" : "redux-icon",
        "path" : "images/redux-svgrepo-com.svg"
    },
    {
        "name" : "sass-icon",
        "path" : "images/sass-svgrepo-com.svg"
    },
    {
        "name" : "vscode-icon",
        "path" : "images/vscode-insiders-svgrepo-com.svg"
    }
];
const skillsContainer = document.getElementById("skills-icons");
let emptyArr = []
for (let i = 0; i < skillsStorage.length;i++){
    emptyArr.push(`<img src="${skillsStorage[i]["path"]}" alt="${skillsStorage[i]["name"]}" id="${skillsStorage[i]["name"]}">`);
}
let joinedEmptyArr = emptyArr.join("");
skillsContainer.innerHTML = joinedEmptyArr;
console.log(joinedEmptyArr);
