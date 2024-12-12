import { findTerm } from '@/lib/api/term';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const { data } = await findTerm(name);
  if (!data?.findTerm)
    return {
      title: '구해요',
      description: '디스코드 거래 장터, 구해요',
    };

  return {
    title: `${name} 규칙 | 구해요`,
    description: `구해요의 ${name} 규칙을 확인하세요`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
