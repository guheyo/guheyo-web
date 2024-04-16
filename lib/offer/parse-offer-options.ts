import { ButtonOption } from '@/components/inputs/button-inputs';
import { BusinessFunction } from './offer.types';
import { OFFER_OPTIONS } from './offer.constants';

export const parseBusinessFunctionButtonOptions: ({
  businessFunction,
  multiple,
}: {
  businessFunction: BusinessFunction;
  multiple: boolean;
}) => ButtonOption[] = ({ businessFunction, multiple }) => {
  if (multiple) {
    return OFFER_OPTIONS.map((option) => ({
      ...option,
      selected: businessFunction === option.value,
    }));
  }

  const dealOption = OFFER_OPTIONS.find(
    (option) => option.value === businessFunction,
  );
  return dealOption
    ? [
        {
          ...dealOption,
          selected: true,
        },
      ]
    : [];
};
