export const metadata = {
  title: 'About',
  description: '소개 | 기술 스택 | 팀원',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="flex-1" />
      <div className="max-w-7xl">{children}</div>
      <div className="flex-1" />
    </div>
  );
}
