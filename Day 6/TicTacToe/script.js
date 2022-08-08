
const CLASS_O = 'circle'
const CLASS_X = 'cross'
let is_first_player = true
const winningCombinations=[
    //rows
    [0,1,2],
    [3,4,5],
    [5,6,7],
    //columns
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diagonal
    [0,4,8],
    [2,4,6]
]

const cellElements = document.querySelectorAll(".grid-item")
cellElements.forEach(cell=>{
    cell.addEventListener('click',handleCellClick, {once:true})
})

function handleCellClick(clickedCellEvent){
    const clickedCell = clickedCellEvent.target;
    
    if(is_first_player){
        clickedCell.classList.add(CLASS_X)
        is_first_player = false;
        clickedCell.innerHTML = "X"
    }else{
        clickedCell.classList.add(CLASS_O)
        is_first_player = true; 
        clickedCell.innerHTML = "O"
    }

}

function handleResults(){
    return winningCombinations.some(combination =>{
        return winningCombinations.every(index =>{
            return cellElements[index].classList.contains(currentClass)
        })
    })
}







