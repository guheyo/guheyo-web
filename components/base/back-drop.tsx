import { MouseEventHandler } from 'react';

export default function BackDrop({
  backgroundColor,
  opacity,
  handleBackdropClick,
  handleToggle,
}: {
  backgroundColor?: string;
  opacity?: number;
  handleBackdropClick: MouseEventHandler;
  handleToggle: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50"
      style={{
        backgroundColor: backgroundColor || 'black',
        opacity: opacity || 0,
        cursor: 'default',
      }}
      onClick={handleBackdropClick}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          handleToggle();
        }
      }}
      role="button" // Add role="button" to make it accessible for screen reader users
      aria-label="Toggle Menu"
      tabIndex={0} // Ensure element can receive keyboard focus
    />
  );
}
