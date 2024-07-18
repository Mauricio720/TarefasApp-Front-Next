import { Task } from '@/domain/entities/task';

export type GetAllTask = () => Promise<Task[]>;
export type GetTaskById = (id: string) => Promise<Task | undefined>;
export type SaveTask = (task: Task) => Promise<Task>;
export type UpdateTask = (task: Task) => Promise<Task>;
export type DeleteTask = (id: string) => Promise<void>;




