import { z } from "zod"

export const createUpdateTaskFormSchema = z.object({
  title: z.string().min(1, {
    message: "Campo obrigatório",
  }),
  start: z.string().min(1, {
    message: "Campo obrigatório",
  }),
  end: z.string().min(1, {
    message: "Campo obrigatório",
  }),
  date: z.string()
    .refine(value => {
      const date = new Date(value);
      return !isNaN(date.getTime());
   }, { message: "Data inválida" }),
  description: z.string(),
  important: z.string({
    required_error: "Selecione uma opção",
  })
})
