import { addTask, advanceTask, deleteTask, filterByStatus } from "./model.js";
let tasks = [];
let currentFilter = "all";
const titleInput = document.getElementById("title");
const addBtn = document.getElementById("add");
const listEl = document.getElementById("list");
const filterButtons = document.querySelectorAll(".filter");
function render() {
    listEl.innerHTML = "";
    const visibleTasks = currentFilter === "all"
        ? tasks
        : filterByStatus(tasks, currentFilter);
    if (visibleTasks.length === 0) {
        listEl.innerHTML = '<li class="empty">No tasks found. Add a task!</li>';
        return;
    }
    visibleTasks.forEach((task) => {
        const li = document.createElement("li");
        li.className = "task";
        const info = document.createElement("div");
        info.className = "task-info";
        const title = document.createElement("p");
        title.className = "task-title";
        title.textContent = task.title;
        const status = document.createElement("span");
        status.className = "task-status";
        status.textContent = task.status;
        info.append(title, status);
        const actions = document.createElement("div");
        actions.className = "task-actions";
        const advanceBtn = document.createElement("button");
        advanceBtn.textContent = task.status === "done" ? "Completed" : "Advance";
        advanceBtn.disabled = task.status === "done";
        advanceBtn.onclick = () => {
            tasks = advanceTask(tasks, task.id);
            render();
        };
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete";
        deleteBtn.onclick = () => {
            tasks = deleteTask(tasks, task.id);
            render();
        };
        actions.append(advanceBtn, deleteBtn);
        li.append(info, actions);
        listEl.appendChild(li);
    });
}
addBtn.onclick = () => {
    const title = titleInput.value.trim();
    if (!title)
        return;
    tasks = addTask(tasks, title);
    titleInput.value = "";
    render();
};
titleInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addBtn.click();
    }
});
filterButtons.forEach((button) => {
    button.onclick = () => {
        currentFilter = button.dataset.filter;
        filterButtons.forEach((item) => {
            item.classList.remove("active");
        });
        button.classList.add("active");
        render();
    };
});
render();
//# sourceMappingURL=app.js.map