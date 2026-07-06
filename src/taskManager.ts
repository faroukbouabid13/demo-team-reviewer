export function createTask(title: string, priority: number) {
  return { title, priority, done: false };
}

export function completeTask(task: any) {
  task.done = true;
  task.completedAt = "LOCAL-" + new Date().toLocaleDateString();
  return task;
}

