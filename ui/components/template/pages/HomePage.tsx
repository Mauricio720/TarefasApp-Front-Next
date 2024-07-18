import { Task } from "@/domain/entities/task"
import MiniTask from "../MiniTask";
import DialogCreateUpdateTask from "../../dialogs/DialogCreateUpdateTask";
type HomeProps = {
  tasks: Task[]
}
export default function HomePage(props:HomeProps){
  const tasks=props.tasks;
  return(
    <div className="relative">
      {tasks.map((task)=>(
        <MiniTask key={task.id} task={task}/>
      ))}
      <DialogCreateUpdateTask/>
    </div>
  )
  
}