import { TagResponse } from '@/generated/graphql';

export default function UserReviewTags({
  tags,
  rating,
}: {
  tags: TagResponse[];
  rating: number;
}) {
  return (
    <>
      {tags.map((tag) => (
        <div
          key={tag.id}
          className={`rounded-lg px-1 py-0.5 text-[10px] md:text-xs ${
            rating === 1
              ? 'bg-gray-800 text-gray-300'
              : 'bg-zinc-600 text-gray-300'
          }`}
        >
          {tag.name}
        </div>
      ))}
    </>
  );
}
