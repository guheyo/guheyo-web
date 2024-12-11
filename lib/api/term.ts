import { FindTermDocument, FindTermQuery } from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function findTerm(name: string) {
  return client.query<FindTermQuery>({
    query: FindTermDocument,
    variables: {
      name,
    },
  });
}
