import { CategoryResponse } from '@/generated/graphql';

export default function PostCategory({
  category,
}: {
  category: CategoryResponse;
}) {
  if (category.name === '일반') return <div />;

  return (
    <div className="w-fit rounded-lg px-1 py-0.5 text-[10px] md:text-xs bg-gray-600 text-gray-300">
      {category.name}
    </div>
  );
}
