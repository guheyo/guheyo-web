import { CategoryResponse } from '@/generated/graphql';

export default function PostCategory({
  category,
}: {
  category: CategoryResponse;
}) {
  return (
    <div className="rounded-lg px-1 py-0.5 text-[10px] md:text-xs bg-zinc-800 text-gray-300">
      {category.name}
    </div>
  );
}
