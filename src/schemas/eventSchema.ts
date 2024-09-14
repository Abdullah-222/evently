import { z } from 'zod';

export const formSchema = z.object({
  name: z.string()
    .min(3, { message: "Event name must be at least 3 characters long" })
    .max(100, { message: "Event name cannot exceed 100 characters" })
    .trim(), // Trim leading/trailing whitespace
  description: z.string()
    .min(10, { message: "Event description must be at least 10 characters long" })
    .max(500, { message: "Event description cannot exceed 500 characters" })
    .trim(), // Trim leading/trailing whitespace
  date: z.string()
    .min(1, { message: "Event date is required" })
    .refine((date) => !isNaN(Date.parse(date)), { message: "Event date must be a valid date" })
    .transform((date) => new Date(date).toISOString().split('T')[0]), // Format date as YYYY-MM-DD
  time: z.string()
    .min(1, { message: "Event time is required" })
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: "Event time must be in HH:MM format" }), // Validate 24-hour time format
  location: z.string()
    .min(1, { message: "Event location is required" })
    .max(200, { message: "Event location cannot exceed 200 characters" })
    .trim(), // Trim leading/trailing whitespace
  isAuthorized: z.boolean()
});
