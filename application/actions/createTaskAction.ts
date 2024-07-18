'use server'
import { Task } from "@/domain/entities/task"
import { saveTask } from "@/infra/TaskGatewayFetch"
import { revalidateTag } from "next/cache"

export const createTaskAction=async (form:any)=>{
  const task:Task={
    title: form.title,
    start: "test",
    end: "test",
    date: "test",
    importante: "important",
    description: "test",
    icon: "test",
    userId: "any userId",
    selected: true
  }

  await saveTask(task)
  revalidateTag("get-all-tasks")
}
