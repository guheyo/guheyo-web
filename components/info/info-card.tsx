'use client';

import React from 'react';

export default function InfoCard({
  name,
  icon,
  about,
}: {
  name: string;
  icon?: React.ReactNode;
  about?: string | null;
}) {
  return (
    <div className="flex flex-row gap-4 items-center break-all">
      {icon}
      {about ? (
        <div className="flex flex-col">
          <div className="text-sm md:text-base font-bold">{name}</div>
          <div className="text-xs md:text-sm mt-1 md:mt-2">{about}</div>
        </div>
      ) : (
        <div className="text-sm md:text-base font-bold">{name}</div>
      )}
    </div>
  );
}
