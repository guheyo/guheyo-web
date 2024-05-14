import { TagOption } from '../offer/offer.interfaces';

export const getSelectedTagIds = (tagOptions: TagOption[]) =>
  tagOptions.filter((tag) => tag.isSelected).map((tag) => tag.id);
