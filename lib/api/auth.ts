import { JwtResponse, RefreshTokensDocument } from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function refreshTokens(): Promise<any> {
  const res = await client.mutate<JwtResponse>({
    mutation: RefreshTokensDocument,
  });

  return {
    data: res.data,
    errors: res.errors,
    extensions: res.extensions,
  };
}
