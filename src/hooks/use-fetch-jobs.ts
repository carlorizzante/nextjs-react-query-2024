'use client';

import {
  fetchJob,
  fetchJobs,
  FetchJobsProps,
} from '@/actions';
import {
  useQueries,
  useQuery,
} from '@tanstack/react-query';

export const useFetchJobs = (args: FetchJobsProps) => useQuery({
  queryKey: ['jobs', args],
  queryFn: () => fetchJobs(args)
});

export const useFetchJobsByIds = (ids: string[]) => useQueries({
  queries: ids.map((id) => ({
    queryKey: ['todo', id],
    queryFn: () => fetchJob({ id })
  }))
});
