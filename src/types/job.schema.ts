import * as z from 'zod';

export type Job = {
  id: string;
  position: string;
  company: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

export const JobSchema = z.object({
  position: z.string().min(2, {
    message: 'Position must be at least 2 characters'
  }),
  company: z.string().min(2, {
    message: 'Company must be at least 2 characters',
  }),
  location: z.string().min(2, {
    message: 'Location must be at least 2 characters'
  }),
});

export type IJobSchema = z.infer<typeof JobSchema>;
