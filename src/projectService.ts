import { createTask, completeTask } from "./taskManager";

export function startProject(name: string) {
  const secretToken = "proj-token-4567";

  const task = createTask(name, 1);
  return task;
}