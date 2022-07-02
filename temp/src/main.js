const container = document.querySelector(".container")
const content = document.querySelector(".content")
const containerLength = container.clientWidth

//container能容纳多少个字符
let number = Math.floor(containerLength / 16)
//输入了多少回车
let enter = 0
//文字占多少行
let row = 0

//监听输入事件
content.addEventListener("input", () => {

    //content中字符数量
    let wordLength = content.value.length
    //content中字体大小
    content.style.fontSize = 16 + "px"
    //content宽度变化
    let contentLength = wordLength * 16 + 40
    content.style.width = contentLength > containerLength ? containerLength + "px" : contentLength + "px";
    content.style.width = parseInt(content.style.width) < 200 ? 200 + "px" : content.style.width
    //content高度变化
    //文字的高度
    row = Math.ceil(wordLength / number)
    content.style.height = (row + enter) * 16 + 20 + "px";
})


//监听键盘输入
content.addEventListener("keydown", (e) => {
    if (e.which === 13) {
        enter++
        content.style.height = (row + enter) * 16 + 20 + "px";
    }
})