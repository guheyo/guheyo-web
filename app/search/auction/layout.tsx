export async function generateMetadata() {
  return {
    title: `경매 검색 | 구해요`,
    Description: `경매를 찾아보세요`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
