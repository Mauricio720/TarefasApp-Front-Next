'use server'
import { Task } from "@/domain/entities/task"
import { saveTask } from "@/infra/gateways/TaskGatewayFetch"
import { revalidateTag } from "next/cache"
export const createTaskAction=async (form:any)=>{
  const task:Task={
    title: form.title,
    start: form.start,
    end: form.end,
    date: form.date,
    description: form.description,
    icon: form.icon,
    userId: "any user",
    importante: form.important,
    selected: false
  }

  await saveTask(task)
  revalidateTag("get-all-tasks")
}
