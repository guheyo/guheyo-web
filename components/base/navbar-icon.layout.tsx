import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function NavbarIconLayout({ children }: Props) {
  return (
    <div className="flex flex-row items-center hover:text-light-200">
      {children}
    </div>
  );
}
