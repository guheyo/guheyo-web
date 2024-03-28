import {
  ReGenerateTokensDocument,
  ReGenerateTokensMutation,
  RefreshTokensDocument,
  RefreshTokensMutation,
} from '@/generated/graphql';
import { client } from '@/lib/apollo/client';

export async function refreshTokens() {
  return client.mutate<RefreshTokensMutation>({
    mutation: RefreshTokensDocument,
  });
}

export async function reGenerateTokens() {
  return client.mutate<ReGenerateTokensMutation>({
    mutation: ReGenerateTokensDocument,
  });
}
