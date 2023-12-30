import * as z from "zod";

export const userFormSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string(),
});
