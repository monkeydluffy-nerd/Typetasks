
// 1. Define allowed task statuses
export type TaskStatus = "todo" | "in-progress" | "done";

// 2. Define the Task interface
export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

// 3. Generate unique IDs
let nextId = 1;

// 4. Add a new task
export function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = {
    id: nextId++,
    title: title,
    status: "todo"
  };

  return [...tasks, newTask];
}

// 5. Complete a task
export function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, status: "done" } : task
  );
}

// 6. Filter tasks by status
export function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter((task) => task.status === status);
}

// 7. YOUR EXTRA OPERATION: Delete a task
export function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((task) => task.id !== id);
}

// 8. Extra operation: Advance task status
export function advanceTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) => {
    if (task.id !== id) return task;

    if (task.status === "todo") {
      return { ...task, status: "in-progress" };
    }

    if (task.status === "in-progress") {
      return { ...task, status: "done" };
    }

    return task;
  });
}
