import { z } from "zod";

export const signUpSchema = z.object({
    name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(20, "Name must be less than 20 characters")
    .regex(/^[a-zA-Z0-9\s]+$/, "Name must only contain letters, numbers, and spaces"),
    email: z.
    string()
    .email("Invalid email")
    .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Enter a valid email address"),
    password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be less than 20 characters"),
    

})
