'use server';

import { Job } from '@/types';
import prisma from '@/utils/prisma';
import { Prisma } from '@prisma/client';

type FetchJobsProps = {
  search?: string | null;
  page?: number;
  take?: number;
}

type ReturnType = {
  jobs: Job[],
  count: number;
  page: number;
  previousPage: number;
  nextPage?: number;
  totalPages: number;
};

export const fetchJobs = async ({
  search,
  page = 1,
  take = 10,
}: FetchJobsProps): Promise<ReturnType> => {
  try {
    const where: Prisma.JobWhereInput = {};
    if (search) where.OR = [
      { position: { contains: search } },
      { company: { contains: search } },
      { location: { contains: search } },
    ];

    const jobs: Job[] = await prisma.job.findMany({
      // where,
      // orderBy: { createdAt: 'desc' },
      orderBy: { position: 'asc' },
      skip: take * (page - 1),
      take,
    });

    // https://stackoverflow.com/questions/74328100/prisma-find-many-and-count-in-one-request
    // const count = 

    const previousPage = Math.max(1, page - 1);
    const nextPage = jobs.length === take
      ? page + 1
      : undefined;

    // throw new Error('Failed to retrieve jobs from database.');

    if (jobs) {
      return {
        jobs: jobs,
        count: jobs.length,
        page,
        previousPage,
        nextPage,
        totalPages: 0,
      }
    } else {
      throw new Error('Failed to retrieve jobs from database.');
    }
  } catch (e) {
    throw new Error('Failed to retrieve jobs from database.');
  }
}
