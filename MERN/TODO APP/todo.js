function addTodo() {
    let input = document.getElementById("todoInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        ${task}
        <button onclick="this.parentElement.remove()">X</button>
    `;

    document.getElementById("todoList").appendChild(li);
    input.value = "";
}
