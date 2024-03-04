import { JwtResponse, RefreshTokensDocument } from '@/generated/graphql';
import { client } from '@/lib/apollo/client';
import { FetchResult } from '@apollo/client';

export async function refreshTokens(): Promise<FetchResult<any>> {
  const res = await client.mutate({
    mutation: RefreshTokensDocument,
  });

  return {
    data: res.data as JwtResponse,
    errors: res.errors,
    extensions: res.extensions,
  };
}
