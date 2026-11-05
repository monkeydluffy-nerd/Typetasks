// 3. Generate unique IDs
let nextId = 1;
// 4. Add a new task
export function addTask(tasks, title) {
    const newTask = {
        id: nextId++,
        title: title,
        status: "todo"
    };
    return [...tasks, newTask];
}
// 5. Complete a task
export function completeTask(tasks, id) {
    return tasks.map((task) => task.id === id ? { ...task, status: "done" } : task);
}
// 6. Filter tasks by status
export function filterByStatus(tasks, status) {
    return tasks.filter((task) => task.status === status);
}
// 7. YOUR EXTRA OPERATION: Delete a task
export function deleteTask(tasks, id) {
    return tasks.filter((task) => task.id !== id);
}
// 8. Extra operation: Advance task status
export function advanceTask(tasks, id) {
    return tasks.map((task) => {
        if (task.id !== id)
            return task;
        if (task.status === "todo") {
            return { ...task, status: "in-progress" };
        }
        if (task.status === "in-progress") {
            return { ...task, status: "done" };
        }
        return task;
    });
}
//# sourceMappingURL=model.js.map