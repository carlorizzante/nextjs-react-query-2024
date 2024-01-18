'use client';

import Link from 'next/link';
import { Heading } from '@/components';
import {
  useFetchJobs,
  useFetchJobsByIds,
} from '@/hooks';

export const Content = () => {
  const result = useFetchJobs({ take: 10, search: '' });
  const jobs = useFetchJobsByIds((result.data?.jobs || []).map((job) => job.id));

  return (
    <>
      <Heading as="h1">Parallel Loading</Heading>
      <ul>
        {jobs.map(({ data: job }) => job
          ? (
            <li key={job.id}>
              <Link href={`/code-genix/${job.id}`}>{job.position} / {job.company} / {job.location}</Link>
            </li>
          ) : <li>Loading...</li>)}
      </ul>
    </>
  )
};
