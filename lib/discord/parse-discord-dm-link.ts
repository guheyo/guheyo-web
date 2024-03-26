export const parseDiscordDmLink = (socialId?: string) =>
  socialId ? `https://discord.com/users/${socialId}` : '/';
