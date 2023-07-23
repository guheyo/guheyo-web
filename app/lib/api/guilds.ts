import _ from 'lodash';
import { Category, Guild } from 'prisma';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { client } from '../client';
import { guildKeys } from '../query-key-factory';

function parseCategories(categoriesData: any): Array<Category> {
  return _.map(categoriesData, (categoryData) =>
    _.pick(categoryData, ['id', 'name', 'guildId', 'posts', 'rank']),
  );
}

export async function getGuildCategories(guildName: string) {
  const res = await client.get<Category[]>(`/guilds/${guildName}/categories`, {
    headers: {
      'Cache-Control': 'force-cache',
      Pragma: 'force-cache',
    },
  });
  const categories = parseCategories(res.data);
  return categories;
}

export async function getGuilds() {
  const res = await client.get<Guild[]>(`/guilds`, {
    headers: {
      'Cache-Control': 'force-cache',
      Pragma: 'force-cache',
    },
  });
  return res.data;
}

export const useGuildCategories = (guildName: string) =>
  useQuery(
    guildKeys.category(guildName).queryKey,
    () => client.get(`/guilds/${guildName}/categories`),
    {
      select: (data: AxiosResponse<Guild[]>) => parseCategories(data.data),
    },
  );

export const useGuilds = () =>
  useQuery(guildKeys.guild.queryKey, () => client.get('/guilds'));
