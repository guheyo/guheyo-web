'use client';

function TextFeedLayout({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-2 grid-cols-1">{children}</div>;
}

export default TextFeedLayout;
