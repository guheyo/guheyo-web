import { SocialAccount } from 'prisma';
import { client } from '../client';

export async function linkAccount(account: SocialAccount) {
  const res = await client.post<SocialAccount>(`/socialAccounts`, account);
  return res.data;
}

export async function unlinkAccount({
  provider,
  socialId,
}: {
  provider: string;
  socialId: string;
}) {
  const res = await client.delete<SocialAccount>(
    `/socialAccounts?provider=${provider}&socialId=${socialId}`,
  );
  return res.data;
}
