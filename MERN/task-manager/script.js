const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");
const clearBtn = document.getElementById("clearBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

document.getElementById("addBtn").addEventListener("click", addTask);
clearBtn.addEventListener("click", clearCompleted);

render();

function addTask() {
    if (taskInput.value.trim() === "") return;

    tasks.push({
        id: Date.now(),
        text: taskInput.value,
        completed: false
    });

    taskInput.value = "";
    save();
}

function render() {
    taskList.innerHTML = "";

    let visibleTasks = tasks.filter(task => {
        if (filter === "pending") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    });

    visibleTasks.forEach(task => {
        const li = document.createElement("li");
        if (task.completed) li.classList.add("completed");

        const left = document.createElement("div");
        left.className = "task-left";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.onchange = () => toggleTask(task.id);

        const span = document.createElement("span");
        span.innerText = task.text;

        left.append(checkbox, span);

        const actions = document.createElement("div");
        actions.className = "actions";

        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.className = "edit";
        editBtn.onclick = () => editTask(task.id);

        const delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.className = "delete";
        delBtn.onclick = () => deleteTask(task.id);

        actions.append(editBtn, delBtn);

        li.append(left, actions);
        taskList.appendChild(li);
    });

    updateCounter();
}

function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    save();
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    const updated = prompt("Edit task", task.text);
    if (updated) {
        task.text = updated;
        save();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    save();
}

function clearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    save();
}

function updateCounter() {
    const pending = tasks.filter(t => !t.completed).length;
    counter.innerText = `Total: ${tasks.length} | Pending: ${pending}`;
}

function setFilter(type) {
    filter = type;
    render();
}

function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    render();
}
