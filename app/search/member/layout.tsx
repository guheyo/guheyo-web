export async function generateMetadata() {
  return {
    title: `멤버 검색 | 구해요`,
    Description: `멤버를 찾아보세요`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
