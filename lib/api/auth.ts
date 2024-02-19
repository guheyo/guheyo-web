import { JwtResponse, RefreshTokensDocument } from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function refreshTokens(): Promise<JwtResponse> {
  const data = await client.mutate({
    mutation: RefreshTokensDocument,
  });
  return data.data?.refreshTokens;
}
