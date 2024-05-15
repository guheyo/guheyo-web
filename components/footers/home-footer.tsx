'use client';

import DiscordGuildLink from '../link/discord-guild-link';
import PolicyLinks from '../term/policy-links';

export default function HomeFooter() {
  return (
    <div className="flex justify-center items-center gap-4 text-dark-200">
      <PolicyLinks />
      <DiscordGuildLink width={24} height={24}>
        <div />
      </DiscordGuildLink>
    </div>
  );
}
