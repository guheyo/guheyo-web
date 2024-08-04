export async function generateMetadata() {
  return {
    title: `공동구매 검색 | 구해요`,
    Description: `공동구매를 찾아보세요`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
