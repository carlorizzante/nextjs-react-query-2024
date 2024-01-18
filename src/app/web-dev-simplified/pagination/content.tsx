'use client';

import {
  useCallback,
  useState,
} from 'react';
import Link from 'next/link';
import { fetchJobs } from '@/actions';
import {
  keepPreviousData,
  useQuery,
} from '@tanstack/react-query';

export const Content = () => {
  const [page, setPage] = useState(1);
  // const queryClient = useQueryClient();

  const paginated = useQuery({
    queryKey: ['jobs', { page }],
    queryFn: () => fetchJobs({ page }),
    placeholderData: keepPreviousData
  })

  // @ts-ignore
  // const paginated = useInfiniteQuery({
  //   queryKey: ['jobs', 'infinite', { page }],
  //   initialPageParam: page,
  //   getPreviousPageParam: (data) => data.previousPage,
  //   getNextPageParam: (data) => data.nextPage,
  //   queryFn: ({ pageParam }) => fetchJobs({ page: pageParam }),
  // });

  const handleFetchPrevPage = useCallback(() => {
    setPage(paginated.data?.previousPage);
  }, [paginated]);

  const handleFetchNextPage = useCallback(() => {
    setPage((page) => paginated.data?.nextPage || page);
  }, [paginated]);

  // console.log('paginated', paginated.data)

  return (
    <>
      <p>Content</p>
      <nav className="flex gap-4 my-4">
        <button onClick={handleFetchPrevPage}>Prev</button>
        <p>{page}</p>
        <button onClick={handleFetchNextPage}>Next</button>
      </nav>
      <ul>
        {paginated.data?.jobs.map((job) => (
          <li key={job.id}>
            <Link href={`/web-dev-simplified/${job.id}`}>{job.position}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
