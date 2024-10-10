export async function generateMetadata() {
  return {
    title: `브랜드 검색 | 구해요`,
    Description: `브랜드를 찾아보세요`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
