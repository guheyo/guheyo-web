'use client';

import { useFindEmojisQuery } from '@/generated/graphql';
import { IconButton } from '@mui/material';
import React, { MouseEventHandler, useState } from 'react';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import Avatar from '../avatar/avatar';
import BackDrop from '../base/back-drop';

export default function ReactionButton({
  onEmojiClick,
}: {
  onEmojiClick: (selectedEmojiId: string) => void;
}) {
  const { data, loading } = useFindEmojisQuery({
    fetchPolicy: 'cache-first',
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (loading) return <div />;
  if (!data?.findEmojis) return <div />;
  const emojis = data.findEmojis;

  const handleReactionButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleEmojiClick = (emojiId: string) => {
    setIsDropdownOpen(false); // Close the dropdown after selecting an emoji
    onEmojiClick(emojiId);
  };

  const handleBackdropClick: MouseEventHandler = (event) => {
    // Prevent propagation of click event to background component
    event.stopPropagation();
    event.preventDefault();
    handleReactionButtonClick();
  };

  return (
    <div className="flex flex-row gap-2 justify-start items-center h-2">
      {isDropdownOpen && (
        <BackDrop
          handleBackdropClick={handleBackdropClick}
          handleToggle={handleReactionButtonClick}
        />
      )}
      <IconButton
        className="reaction-button text-gray-500 hover:text-gray-300"
        onClick={handleReactionButtonClick}
      >
        <AddReactionIcon className="text-lg" />
      </IconButton>
      {/* Dropdown menu for selecting emojis */}
      {isDropdownOpen && (
        <div className="bg-gray-600 rounded-lg p-0.5 w-full z-50">
          {emojis.map((emoji) => (
            <IconButton
              key={emoji.id}
              onClick={() => handleEmojiClick(emoji.id)}
              className="hover:bg-gray-500"
            >
              {emoji.url && (
                <Avatar src={emoji.url} name={emoji.name} fontSize="text-2xs" />
              )}
            </IconButton>
          ))}
        </div>
      )}
    </div>
  );
}
