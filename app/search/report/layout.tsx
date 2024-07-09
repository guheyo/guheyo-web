export async function generateMetadata() {
  return {
    title: `신고 검색 | 구해요`,
    Description: `신고를 찾아보세요`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
