'use client';

import Link from 'next/link';
import {
  createJob,
  fetchJobs,
} from '@/actions';
import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

export const Content = () => {
  const queryClient = useQueryClient();

  const result = useQuery({
    queryKey: ['jobs'],
    queryFn: () => fetchJobs({}),
    // refetchInterval: 1000 * 2
  });

  const mutate = useMutation({
    mutationFn: () => createJob({
      position: 'Janitor',
      company: 'OpenAI',
      location: 'San Francisco'
    }),
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] })
    },
    onError: (error, variables, context) => null,
    onSettled: (data, error, variables, context) => null,
    onMutate: (variables) => null,
  });

  return (
    <>
      <p>Content</p>
      <button onClick={() => mutate.mutate()}>Create job</button>
      <ul>
        {result.data?.jobs.map((job) => (
          <li key={job.id}>
            <Link href={`/web-dev-simplified/${job.id}`}>{job.position}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
