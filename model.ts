
// 1. Define the allowed task statuses
export type TaskStatus = "todo" | "in-progress" | "done";

// 2. Define the Task interface
export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

// 3. Add a new task
export function addTask(tasks: Task[], title: string): Task[] {
  const nextId =
    tasks.length === 0
      ? 1
      : Math.max(...tasks.map((task) => task.id)) + 1;

  const newTask: Task = {
    id: nextId,
    title: title,
    status: "todo"
  };

  return [...tasks, newTask];
}

// 4. Complete a task
export function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id
      ? { ...task, status: "done" }
      : task
  );
}

// 5. Filter tasks by status
export function filterByStatus(
  tasks: Task[],
  status: TaskStatus
): Task[] {
  return tasks.filter((task) => task.status === status);
}

// 6. Extra operation: Delete a task
export function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((task) => task.id !== id);
}

// 7. Extra operation: Advance task status
export function advanceTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) => {
    if (task.id !== id) {
      return task;
    }

    if (task.status === "todo") {
      return { ...task, status: "in-progress" };
    }

    if (task.status === "in-progress") {
      return { ...task, status: "done" };
    }

    return task;
  });
}
