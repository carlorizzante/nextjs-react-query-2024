'use client';

import Link from 'next/link';
import { fetchJobs } from '@/actions';
import { useInfiniteQuery } from '@tanstack/react-query';

export const Content = () => {
  // const [page, setPage] = useState(1);
  // const queryClient = useQueryClient();

  // @ts-ignore
  const paginated = useInfiniteQuery({
    queryKey: ['jobs', 'infinite'],
    initialPageParam: 1,
    getNextPageParam: (data) => data.nextPage,
    queryFn: ({ pageParam }) => fetchJobs({ page: pageParam }),
  });

  console.log('paginated', paginated.data?.pageParams);

  const handleFetchMore = async () => {
    await paginated.fetchNextPage();
  }

  return (
    <>
      <ul>
        {paginated.data?.pages
          .flatMap((page) => page.jobs)
          .map((job) => (
            <li key={job.id}>
              <Link href={`/web-dev-simplified/${job.id}`}>{job.position} / {job.company}</Link>
            </li>
          ))}
      </ul>
      <button onClick={handleFetchMore}>Fetch more jobs</button>
    </>
  )
}
