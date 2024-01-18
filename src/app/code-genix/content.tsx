'use client';

import Link from 'next/link';
import { useFetchJobs } from '@/hooks';

export const Content = () => {
  const result = useFetchJobs({ take: 10, search: '' });

  return (
    <>
      <ul>
        {result.data?.jobs.map((job) => (
          <li key={job.id}>
            <Link href={`/code-genix/${job.id}`}>{job.position} / {job.company} / {job.location}</Link>
          </li>
        ))}
      </ul>
    </>
  )
};
