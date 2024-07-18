type TaskImportance = "important" | "veryImportant" | "normal";
export type Task = {
  id?: string
  title: string
  start: string
  end: string
  date: string
  importante: TaskImportance
  description: string
  icon: string
  userId: string
  selected: boolean
}