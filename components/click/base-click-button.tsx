'use client';

import { IconButton } from '@mui/material';
import React, { ReactNode, useState } from 'react';

export default function BaseClickButton({
  defaultClicked,
  clickedNode,
  unClickedNode,
  handleClick,
}: {
  defaultClicked: boolean;
  clickedNode: ReactNode;
  unClickedNode: ReactNode;
  handleClick: (clicked: boolean) => void;
}) {
  const [clicked, setClicked] = useState(defaultClicked);

  const handleOnClick = () => {
    const nextClicked = !clicked;
    setClicked(nextClicked);
    handleClick(nextClicked);
  };

  return (
    <IconButton onClick={handleOnClick}>
      {clicked ? clickedNode : unClickedNode}
    </IconButton>
  );
}
