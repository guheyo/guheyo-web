import React from 'react';

interface FloatingButtonProps {
  handleClick: () => void;
}

export default function FloatingButton({ handleClick }: FloatingButtonProps) {
  return (
    <button
      type="button"
      className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-blakc shadow-md flex items-center justify-center text-xl font-bold
      text-white
      "
      onClick={handleClick}
    >
      +
    </button>
  );
}
