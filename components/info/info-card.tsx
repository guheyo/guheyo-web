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
          <div className="text-xs md:text-sm">{name}</div>
          <div className="text-xs md:text-sm mt-1 md:mt-2 text-gray-500 md:text-gray-400">
            {about}
          </div>
        </div>
      ) : (
        <div className="text-xs md:text-sm">{name}</div>
      )}
    </div>
  );
}
