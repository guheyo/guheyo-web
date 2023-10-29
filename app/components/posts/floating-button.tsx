import React from 'react';

interface FloatingButtonProps {
  handleClick: () => void;
}

export default function FloatingButton({ handleClick }: FloatingButtonProps) {
  return (
    <button
      type="button"
      className="fixed bottom-10 right-10 z-50 w-16 h-16 rounded-full bg-black shadow-md flex items-center justify-center text-white p-5"
      onClick={handleClick}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-2 h-7 bg-white rounded-sm" />
        <div className="absolute h-2 w-7 bg-white rounded-sm" />
      </div>
    </button>
  );
}
