'use client';

import { useFindEmojisQuery } from '@/generated/graphql';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import Avatar from '../avatar/avatar';

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

  return (
    <div className="flex flex-row gap-2 justify-start items-center h-2">
      <IconButton
        className="reaction-button text-gray-300 hover:text-gray-100"
        onClick={handleReactionButtonClick}
      >
        <AddReactionIcon />
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
                <Avatar src={emoji.url} name={emoji.name} fontSize="text-xxs" />
              )}
            </IconButton>
          ))}
        </div>
      )}
    </div>
  );
}
