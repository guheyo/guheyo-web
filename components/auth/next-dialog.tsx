'use client';

import DiscordLoginDialogButton from '@/components/auth/discord-login-dialog-button';
import { FIXED_SUBMIT_BUTTON_STYLE } from '@/lib/input/input.styles';
import { MouseEventHandler } from 'react';

export default function NextDialog({
  onAuthorization,
  onUnAuthorization,
}: {
  onAuthorization: MouseEventHandler;
  onUnAuthorization: MouseEventHandler;
}) {
  return (
    <div className={FIXED_SUBMIT_BUTTON_STYLE}>
      <DiscordLoginDialogButton
        name="다음"
        onAuthorization={onAuthorization}
        onUnAuthorization={onUnAuthorization}
      />
    </div>
  );
}
