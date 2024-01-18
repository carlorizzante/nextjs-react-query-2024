'use server';

import {
  IJobSchema,
  Job,
  JobSchema,
} from '@/types';
import prisma from '@/utils/prisma';

export const createJob = async (values: IJobSchema): Promise<Job> => {
  try {
    JobSchema.parse(values);
    const job: Job = await prisma.job.create({
      data: values
    });

    // throw new Error('Failed to create job.');

    if (job) {
      return job;
    } else {
      throw new Error('Failed to create job.');
    }
  } catch (e) {
    throw new Error('Failed to create job.');
  }
}
