import { ButtonOption } from '@/components/inputs/button-inputs';
import { DealType } from './deal.types';
import { DEAL_OPTIONS } from './deal.constants';

export const parseDealTypeButtonOptions: ({
  dealType,
  multiple,
}: {
  dealType: DealType;
  multiple: boolean;
}) => ButtonOption[] = ({ dealType, multiple }) => {
  if (multiple) {
    return DEAL_OPTIONS.map((option) => ({
      ...option,
      selected: dealType === option.value,
    }));
  }

  const dealOption = DEAL_OPTIONS.find((option) => option.value === dealType);
  return dealOption
    ? [
        {
          ...dealOption,
          selected: true,
        },
      ]
    : [];
};
