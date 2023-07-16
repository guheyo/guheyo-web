import _ from "lodash";
import { Category, Guild } from "prisma";
import { client } from "../client";

function parseCategories(categoriesData: any): Array<Category> {
  return _.map(categoriesData, (categoryData) => _.pick(categoryData, ['id', 'name', 'guildId', 'posts', 'rank']));
}

export async function getGuildCategories(guildName: string) {
  const res = await client.get<Category[]>(`/guilds/${guildName}/categories`, {
    headers: {
      'Cache-Control': 'force-cache',
      'Pragma': 'force-cache',
    }
  });
  const categories = parseCategories(res.data);
  return categories;
}

export async function getGuilds() {
  const res = await client.get<Guild[]>(`/guilds`, {
    headers: {
      'Cache-Control': 'force-cache',
      'Pragma': 'force-cache',
    }
  });
  return res.data;
}