const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
    const text = inputbox.value.trim();
    if (text === '') {
        alert("You must write something");
        return;
    }

    tasks.push({ text, completed: false });
    inputbox.value = "";
    saveAndRender();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveAndRender();
}

function deleteTask(index) {
    tasks = tasks.filter((_, i) => i !== index); 
    saveAndRender();
}

function saveAndRender() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function renderTasks() {
    listcontainer.innerHTML = tasks.map((task, index) => `
        <li class="${task.completed ? 'checked' : ''}" onclick="toggleTask(${index})">
            ${task.text}
            <span onclick="event.stopPropagation(); deleteTask(${index})">\u00d7</span>
        </li>
    `).join('');
}

renderTasks();
