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
    block.innerHTML = content.value;
    block.style.display = "flex"
    block.style.justifyContent = "center"
    block.style.alignItems = "center"
    block.style.fontsize = "20px"
    block.style.fontFamily = "cursive"
    cotainer2.append(block)

    document.querySelector(".css-block").innerHTML = `
    <p class="iteam">${select.value} {</p> 
        <p class="text">widht: ${widht.value}px</p>
        <p class="text">height: ${height.value}px</p>
        <p class="text">color: ${color.value}</p>
        <p class="text">bgColor: ${bgColor.value}</p>
        <p class="text">content: ${content.value}</p>
    }
    `
    let iteams = [...document.querySelectorAll(".iteam")];
    iteams.map(iteam => {
        iteam.style.color = "aqua"
        iteam.style.fontsize = "20px"
        iteam.style.fontFamily = "fantasy"
    })
    let texts = [...document.querySelectorAll(".text")]
    texts.map(el => {
        el.style.color ="white"
        el.style.fontsize ="20px"
        el.style.fontFamily = "cursive"
    })
    // console.log(text);
})