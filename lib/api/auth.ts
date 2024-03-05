import {
  RefreshTokensDocument,
  RefreshTokensMutation,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function refreshTokens() {
  return client.mutate<RefreshTokensMutation>({
    mutation: RefreshTokensDocument,
  });
}
