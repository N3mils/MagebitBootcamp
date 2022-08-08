let board = document.querySelector(".game")
createBoard()
function createBoard(){
    console.log(1)
    for(let i = 0; i <= 109; i++){
        let div = document.createElement("div")
        div.setAttribute("data-id", i)
        div.className = "grid-item-taken"
        if(i >= 10){
            div.className = "grid-item"
        }
        board.appendChild(div)
    }
}


