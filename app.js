let cotainer1 = document.getElementById("cotainer1");
let cotainer2 = document.getElementById("cotainer2");
let cotainer3 = document.getElementById("cotainer3");

let widht = document.getElementById("widht");
let height = document.getElementById("height");
let color = document.getElementById("color");
let bgColor = document.getElementById("bgColor");
let content = document.getElementById("content");
let select = document.getElementById("elements");
let btn = document.getElementById("btn");


btn.addEventListener("click", () => {
    cotainer2.innerHTML = "";
    let block = document.createElement(select.value)
    block.style.widht = widht.value + "px";
    block.style.height = height.value + "px";
    block.style.color = color.value;
    block.style.backgroundColor = bgColor.value;
    block.innerHTML.content = content.value;
    block.style.display = "flex"
    block.style.justifyContent = "center"
    block.style.alignIteams = "center"
    block.style.fontsize = "20px"
    block.style.fontFamily = "cursive"
})