import { Task } from '@/domain/entities/task';
import { GetAllTask, SaveTask } from '@/application/gateways/TaskGateway';

export const getAllTasks: GetAllTask = async () => {
  const response = await fetch(process.env.PUBLIC_NEXT_BASE_API+"tasks",{
    next: { tags: ['get-all-tasks'] },
    headers: {
      "Content-Type": "application/json",
    },
  });
  const tasksResponseData = await response.json();
  const allTasks:Task[]=[]
  for (const task of tasksResponseData) {
    allTasks.push({
      id: task.id,
      title: task.title,
      start: task.start,
      end: task.end,
      date: task.date,
      importante: task.important,
      description: task.description,
      icon: task.icon,
      userId: task.userId,
      selected: task.selected
    })
  }
  return allTasks;
};

export const saveTask: SaveTask = async (task) => {
  const response = await fetch(process.env.PUBLIC_NEXT_BASE_API+"tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const responseData = await response.json();
  
  return responseData;
}
