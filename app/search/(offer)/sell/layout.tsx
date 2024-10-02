export async function generateMetadata() {
  return {
    title: `판매글 검색 | 구해요`,
    Description: `판매글을 찾아보세요`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
