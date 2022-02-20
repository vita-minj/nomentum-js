const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const todoBtn = document.querySelector("#todo-btn");
const todoPopup = document.querySelector("#todo-popup");

const TODOS_KEY = "toDos";

let toDos = [];

todoBtn.addEventListener("click", ((event) => todoPopup.classList.toggle("hidden")));

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function completeTodo(event){
    const li = event.target.parentElement.parentElement;
    li.classList.toggle("complete");
    saveToDos();
}

function deleteToDo(event) {
    const li = event.target.parentElement.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    saveToDos(); 
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const checkBtn = document.createElement("button");
    checkBtn.addEventListener("click", completeTodo);
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkBtn.classList.add("check");
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.classList.add("delete");
    button.addEventListener("click", deleteToDo);
    button.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    li.appendChild(checkBtn);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = ""; 
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
    };
    
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
