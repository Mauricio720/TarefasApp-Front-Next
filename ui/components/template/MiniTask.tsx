'use client'
import { Task } from "@/domain/entities/task"
export type TaskProps = {
  task: Task
}
export default function MiniTask(props:TaskProps){
  return(
    <div className="w-[220px] h-[250px] border-[2px] border-blue-500">
      <div className="h-20">
        <p>{props.task.title}</p>
      </div>
    </div>
  )
}