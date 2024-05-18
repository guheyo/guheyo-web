export const metadata = {
  title: '소개 | 구해요',
  description: '구해요를 알아보세요',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="flex-1" />
      <div className="max-w-2xl">{children}</div>
      <div className="flex-1" />
    </div>
  );
}
