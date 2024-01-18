'use server';

import {
  Job,
  WithId,
} from '@/types';
import { wait } from '@/utils';
import prisma from '@/utils/prisma';

export const fetchJob = async ({ id }: WithId): Promise<Job> => {
  await wait(Math.random() * 1000);

  try {
    const job = await prisma.job.findUnique({
      where: { id },
    });

    if (job) {
      return job
    } else {
      throw new Error('Unable to fetch job.');
    }
  } catch (e) {
    throw new Error('Unable to fetch job.');
  }

}
