'use client';

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

export const useGuildCategories = (guildName: string) =>
  useQuery(
    guildKeys.categories(guildName).queryKey,
    () => client.get(`/guilds/${guildName}/categories`),
    {
      select: (data: AxiosResponse<Guild[]>) => parseCategories(data.data),
      cacheTime: Infinity,
    },
  );

export const useGuilds = () =>
  useQuery(guildKeys.all.queryKey, () => client.get('/guilds'));
