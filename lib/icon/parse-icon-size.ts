import { ComponentSize } from '../component/component.types';

export const parseIconSize = (size: ComponentSize) => {
  if (size === 'small') return 'text-2xl';
  if (size === 'medium') return 'text-3xl';
  return 'text-4xl';
};
