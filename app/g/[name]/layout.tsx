export default function GuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="flex-1" />
      <div className="max-w-7xl">
        {children}
      </div>
      <div className="flex-1" />
    </div>
  );
}