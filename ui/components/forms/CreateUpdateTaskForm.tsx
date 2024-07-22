'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { createTaskAction } from "@/application/actions/createTaskAction";
import { Task } from "@/domain/entities/task";
import { z } from "zod"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { createUpdateTaskFormSchema } from "@/domain/schemas/createUpdateTaskSchema";
import { formaterToAmericanDate } from "@/domain/utils/DateFormater";
type CreateUpdateTaskFormProps = {
  task?: Task
}
export function CreateUpdateTaskForm({ task }: CreateUpdateTaskFormProps) {
  const form = useForm<z.infer<typeof createUpdateTaskFormSchema>>({
    resolver: zodResolver(createUpdateTaskFormSchema),
    defaultValues: {
      title: task?.title ?? "",
      start: task?.start ?? "",
      end: task?.end ?? "",
      date: task ? new Date(task.date).toISOString().slice(0, 10):new Date().toISOString().slice(0, 10),
      description: task?.description ?? "",
    },
  })

  const onSubmit = (data: z.infer<typeof createUpdateTaskFormSchema>) => {
    try {
      createTaskAction(data);
    } catch (error) {
      console.error("Erro ao submeter o formulário", error);
    }
  };
  return (
    <Form  {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={() => (
            <FormItem>
              <FormLabel>Titulo</FormLabel>
              <FormControl>
                <Input placeholder="Titulo" {...form.register("title")} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="start"
          render={() => (
            <FormItem>
              <FormLabel>Inicio</FormLabel>
              <FormControl>
                <Input type="time" placeholder="Inicio" {...form.register("start")} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="end"
          render={() => (
            <FormItem>
              <FormLabel>Fim</FormLabel>
              <FormControl>
                <Input type="time" placeholder="Fim" {...form.register("end")} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={() => (
            <FormItem>
              <FormLabel>Data</FormLabel>
              <FormControl>
                <Input type="date" {...form.register("date")} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={() => (
            <FormItem>
              <FormLabel>Descricão</FormLabel>
              <FormControl>
                <Input
                  placeholder="Descricão"
                  {...form.register("description")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

      <FormField
        control={form.control}
        name="important"
        render={() => (
          <FormItem>
            <FormControl>
              <Select >
                <FormLabel>Prioridade</FormLabel>
                <SelectTrigger >
                  <SelectValue placeholder="Selecione a prioridade" />
                </SelectTrigger>
                <SelectContent  {...form.register("important")}>
                  <SelectItem value="important">Importante</SelectItem>
                  <SelectItem value="veryImportant">Muito Importante</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div>
        <Button type="submit">Cadastrar</Button>
      </div>
    </form>
  </Form>
  )
}