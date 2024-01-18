'use client';

import { createJob } from '@/actions';
import { Job } from '@/types';
import { useMutation } from '@tanstack/react-query';

export const useCreateJob = () => useMutation({
  mutationKey: ['jobs'],
  mutationFn: (job: Job) => createJob(job)
});
