import { NextRequest, NextResponse } from 'next/server';
import { Category, Guild } from 'prisma';

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/') {
    const baseURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}:${process.env.NEXT_PUBLIC_API_PORT}/api`;
    try {
      const guilds = (await (
        await fetch(`${baseURL}/guilds`)
      ).json()) as Guild[];
      const defaultGuildName = guilds[0].name;

      const categories = (await (
        await fetch(
          `${baseURL}/guilds/${encodeURIComponent(
            defaultGuildName,
          )}/categories`,
        )
      ).json()) as Category[];
      const defaultCategoryName = categories[0].name;

      return NextResponse.redirect(
        new URL(
          `/${defaultGuildName}/market/${defaultCategoryName}`,
          req.nextUrl,
        ),
      );
    } catch (error) {
      throw new Error('API와 통신이 원활하지 않습니다.');
    }
  }
  return NextResponse.next();
}
