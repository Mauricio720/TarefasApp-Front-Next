import { Task } from "@/domain/entities/task"
import MiniTask from "../MiniTask";
import { CreateUpdateTaskForm } from "../../forms/CreateUpdateTaskForm";
import Modal from "../../Modal";
type HomeProps = {
  tasks: Task[]
}
export default function HomePage(props:HomeProps){
  const tasks=props.tasks;
  return(
    <div className="flex justify-center flex-wrap gap-2">
      {tasks.map((task)=>(
        <MiniTask key={task.id} task={task}/>
      ))}
       <Modal 
          title="Create Task" 
          triggerComponent={
            <div className="fixed bottom-0 w-full h-8 flex justify-center bg-red-600">
              +
            </div>
          }>
        <CreateUpdateTaskForm />
      </Modal>
    </div>
  )
  
}