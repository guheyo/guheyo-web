export async function generateMetadata({ params }: { params: any }) {
  const { slug } = params;

  return {
    title: `제품 검색 | 구해요`,
    Description: `${slug} 그룹에서 제품을 찾아보세요`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
