export const truncateText = (name: string, length: number) => {
  const truncatedName = name.slice(0, length);
  return truncatedName.length < name.length
    ? `${truncatedName} ...`
    : truncatedName;
};
