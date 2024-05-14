import { MouseEventHandler } from 'react';

export default function BackDrop({
  handleBackdropClick,
  handleToggle,
}: {
  handleBackdropClick: MouseEventHandler;
  handleToggle: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50"
      onClick={handleBackdropClick}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          handleToggle();
        }
      }}
      role="button" // Add role="button" to make it accessible for screen reader users
      aria-label="Toggle Menu"
      tabIndex={0} // Ensure element can receive keyboard focus
      style={{ cursor: 'default' }}
    />
  );
}
