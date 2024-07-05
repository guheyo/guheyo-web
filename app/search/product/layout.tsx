export async function generateMetadata() {
  return {
    title: `제품 검색 | 구해요`,
    Description: `제품을 찾아보세요`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
