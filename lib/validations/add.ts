import * as z from "zod";

export const absenceScema = z.object({
  subject: z.string(),
  grade: z.string(),
  class: z.string(),
  className: z.string(),
  attendance: z.string(),
  date: z.date(),
  time: z.string(),
});
