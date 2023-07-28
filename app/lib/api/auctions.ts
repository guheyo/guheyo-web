import { Auction } from 'prisma';
import { client } from '../client';

export type Auctions = {
  auctions: Auction[];
  cursor: string;
  hasNextPage: boolean;
};

export async function getAuctions(
  categoryId: string,
  type: string,
  cursor: string,
) {
  const res = await client.get<Auctions>(
    `/categories/${categoryId}/posts?type=${type}&cursor=${cursor}`,
  );
  return res.data;
}

export async function getAuction(id: string) {
  const res = await client.get<Auction>(`/posts/${id}`);
  return res.data;
}
