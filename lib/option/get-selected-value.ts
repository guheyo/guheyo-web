import { Option } from '@/interfaces/selector.interfaces';

export const getSelectedValue = (options: Option[], selectedId?: string) =>
  options.some((option) => option.value === selectedId)
    ? selectedId
    : undefined;
