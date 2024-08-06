export const getNewEdges = ({
  previousEdges,
  fetchMoreEdges,
  cursor,
}: {
  previousEdges: any[];
  fetchMoreEdges: any[];
  cursor?: string | null;
}) => {
  if (!cursor) return fetchMoreEdges;

  const cursorEdgeIndex = previousEdges.findIndex(
    (edge) => edge.cursor === cursor,
  );
  const duplicatedEdgeLen = previousEdges.length - 1 - cursorEdgeIndex;
  return fetchMoreEdges.slice(duplicatedEdgeLen);
};
