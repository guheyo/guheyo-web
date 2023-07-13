import {ReactNode} from 'react'

export default function GuildLayout({
  children,
}: {
  children: ReactNode;
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