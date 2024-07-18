import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { createTaskAction } from "@/application/actions/createTaskAction";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function CreateUpdateTaskForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  })

  const onSubmit = (data:any) => {
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
          name="title"
          render={() => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...form.register("title")} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Cadastrar</Button>
        </form>
      </Form>
  )
}