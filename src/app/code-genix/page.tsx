import { fetchJobs } from '@/actions';
import { Heading } from '@/components';
import { QueryClient } from '@tanstack/react-query';
import { Content } from './content';

export default function Page() {
  const queryClient = new QueryClient();

  // Not sure about that...
  queryClient.prefetchQuery({
    queryKey: ['jobs'],
    queryFn: () => fetchJobs({})
  });

  return (
    <>
      <Heading as="h1">Code Genix</Heading>
      <Content />
    </>
  )
}
