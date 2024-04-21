import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function NavbarIconLayout({ children }: Props) {
  return (
    <div className="flex flex-col items-center hover:text-light-200">
      {children}
    </div>
  );
}
