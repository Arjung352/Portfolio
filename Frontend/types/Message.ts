import { z } from "zod";

export const messageSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name is too long" }),

  email: z.string().email({ message: "Invalid email address" }),

  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters" })
    .max(500, { message: "Message is too long" }),
});
export type MessageFormData = z.infer<typeof messageSchema>;
