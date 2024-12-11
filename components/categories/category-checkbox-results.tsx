'use client';

import { Mocks } from '@/components/mock/mock';
import { Checkbox } from '@mui/material';
import tailwindConfig from '@/tailwind.config';
import { Control, useController } from 'react-hook-form';
import { CheckboxFormValues } from '@/lib/search/search.types';
import { useSearchParams } from 'next/navigation';
import { ComponentSize } from '@/lib/component/component.types';
import { useInfiniteCategories } from '@/hooks/use-infinite-categories';
import {
  FindCategoriesOrderByInput,
  FindCategoriesWhereInput,
} from '@/generated/graphql';

const {
  theme: { colors },
} = tailwindConfig;

function CategoryCheckboxResults({
  where,
  orderBy,
  control,
  handleCheckboxClick,
  size,
}: {
  where: FindCategoriesWhereInput;
  orderBy?: FindCategoriesOrderByInput;
  control: Control<CheckboxFormValues>;
  handleCheckboxClick: (seletedId: string) => void;
  size: ComponentSize;
}) {
  const { field } = useController({ name: 'selectedIds', control });
  const searchParams = useSearchParams();
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;

  const { setRef, loading, data } = useInfiniteCategories({
    where: {
      groupIds: where.groupIds,
      categoryTypes: where.categoryTypes,
      createdAt: where.createdAt,
    },
    orderBy: {
      position: 'asc',
    },
    keyword,
    target,
    take: 12,
  });

  const handleClick = (groupId: string) => {
    handleCheckboxClick(groupId);
  };

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findCategories) return <div />;

  const { edges } = data.findCategories;

  return (
    <>
      {edges.map((edge) => (
        <div key={edge.node.id} className="flex flex-row items-center">
          <Checkbox
            style={{ color: colors['light-200'] }}
            checked={field.value.includes(edge.node.id)}
            onChange={() => handleClick(edge.node.id)}
          />
          <div className="w-full">{edge.node.name}</div>
        </div>
      ))}
      <div ref={setRef} className="h-1" />
    </>
  );
}

export default CategoryCheckboxResults;
