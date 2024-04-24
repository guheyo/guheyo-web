import { ReactNode } from 'react';

export default function RatingIcon({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <div className="text-base md:text-lg">{label}</div>
    </div>
  );
}
