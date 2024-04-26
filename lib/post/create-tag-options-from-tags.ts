import { TagResponse } from '@/generated/graphql';
import { TagOption } from '../offer/offer.interfaces';

export const createTagOptionsFromTags = ({
  tags,
  tagType,
  selectFirst = false,
}: {
  tags: TagResponse[];
  tagType: string;
  selectFirst: boolean;
}): TagOption[] =>
  tags
    .filter((tag) => tag.type === tagType)
    .map((tag, index) => ({
      ...tag,
      isSelected: selectFirst && index === 0,
    }));
