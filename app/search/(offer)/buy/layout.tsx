export async function generateMetadata() {
  return {
    title: `구매글 검색 | 구해요`,
    Description: `구매글을 찾아보세요`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
