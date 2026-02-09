const input = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const addBtn = document.getElementById("addTodo");
const resetBtn = document.getElementById("resetTodo");

let todos = [];

/* Load todos from localStorage */
const storedTodos = localStorage.getItem("todos");
if (storedTodos) {
    todos = JSON.parse(storedTodos);
}

renderTodos();

/* Button Events */
addBtn.addEventListener("click", addTodo);
resetBtn.addEventListener("click", resetTodo);

/* Add Todo */
function addTodo() {
    const task = input.value.trim();

    if (task === "") {
        alert("Enter a task");
        return;
    }

    todos.push(task);
    saveTodos();
    renderTodos();
    input.value = "";
}

/* Render Todos */
function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${task}
            <button onclick="deleteTodo(${index})">X</button>
        `;
        todoList.appendChild(li);
    });
}

/* Delete Todo */
function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

/* Reset All Todos */
function resetTodo() {
    todos = [];
    saveTodos();
    renderTodos();
}

/* Save to LocalStorage */
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}