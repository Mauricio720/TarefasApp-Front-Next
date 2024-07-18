import { getAllTasks } from "@/infra/TaskGatewayFetch";
import HomePage from "@/ui/components/template/pages/HomePage";

export default async function Home() {
  const allTask=await getAllTasks();
  return (
   <HomePage tasks={allTask}/>
  );
}
