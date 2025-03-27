// script.js
document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach(task => addTaskToDOM(task));
}

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    addTaskToDOM(taskText);
    input.value = "";
}

function addTaskToDOM(taskText) {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">X</button>`;
    taskList.appendChild(li);
}

function removeTask(button) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskText = button.parentElement.textContent.slice(0, -1);
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    button.parentElement.remove();
}
