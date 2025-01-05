export default async function Home() {
  const response = await fetch('http://task-api:3333/tasks')
  const tasks = await response.json()
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {tasks.map((task: any) => (
        <div key={task.id}>
          <h1 className="text-3xl font-bold">{task.title}</h1>
          <p className="text-lg">{task.description}</p>
        </div>
      ))}
    </div>
  );
}
