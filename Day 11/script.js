//https://www.makeuseof.com/how-to-build-todo-list-app-using-javascript/
const text = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTask");
const saveToDoButton = document.getElementById("saveToDo");
const modifyTaskButton = document.getElementById("modifyTask");
const deleteTaskButton = document.getElementById("deleteTask");
const taskBox = document.getElementById("taskBox");
const saveIndex = document.getElementById("saveIndex");

let todoArray = []; //Array that saves all tasks
displayTodo(); //Displays tasks from storage
addTaskButton.addEventListener("click", function(){ 
    let todo = localStorage.getItem("todo");
    if (todo === null){
        todoArray = [];
    }else{
        todoArray = JSON.parse(todo);
    }
    todoArray.push(text.value);
    text.value = "";
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo()
})

function displayTodo(){ //Displays tasks from storage
    let todo = localStorage.getItem("todo"); //Access saved items in local storage
    if (todo === null) {
      todoArray = [];
    } else {
      todoArray = JSON.parse(todo);
    }
    let htmlCode = "";
    todoArray.forEach((list, ind) => {
        htmlCode += '<div class="newTask">'+ list +'</div> <button id="modifyTask" onclick="edit('+ ind +')">Modify</button> <button id="deleteTask" onclick="deleteTodo('+ ind +')">Delete</button>';
        console.log(list, ind);
    });
    taskBox.innerHTML = htmlCode;
}

function deleteTodo(ind){
    let todo = localStorage.getItem("todo");
    todoArray = JSON.parse(todo);
    todoArray.splice(ind, 1);
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
}

function edit(ind) {
    saveIndex.value = ind;
    let todo = localStorage.getItem("todo");
    todoArray = JSON.parse(todo);
    text.value = todoArray[ind];
    addTaskButton.style.display = "none";
    saveToDoButton.style.display = "block";
}

saveToDoButton.addEventListener("click", () => {
    let todo = localStorage.getItem("todo");
    todoArray = JSON.parse(todo);
    let id = saveIndex.value;
    todoArray[id] = text.value;
    addTaskButton.style.display = "block";
    saveToDoButton.style.display = "none";
    text.value = "";
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
   });

