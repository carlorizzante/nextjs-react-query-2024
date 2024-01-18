import { fetchJob } from '@/actions';
import { Heading } from '@/components';
import { WithId } from '@/types';
import { queryClient } from '../query-client';

type PageProps = {
  params: WithId;
}

export default async function Page({ params }: PageProps) {
  const result = await queryClient.fetchQuery({
    queryKey: ['post', params.id],
    queryFn: () => fetchJob({ id: params.id })
  });

  return (
    <>
      <Heading as="h1">Web Dev Simplified</Heading>
      <pre>
        {JSON.stringify(result.position)}
      </pre>
    </>
  )
}
