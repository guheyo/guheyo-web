import { JwtResponse, RefreshTokensDocument } from '@/generated/graphql';
import { client } from '@/lib/apollo/client';
import { FetchResult } from '@apollo/client';

export async function refreshTokens(): Promise<FetchResult<JwtResponse>> {
  const res = await client.mutate<JwtResponse>({
    mutation: RefreshTokensDocument,
  });

  return {
    data: res.data,
    errors: res.errors,
    extensions: res.extensions,
  };
}
