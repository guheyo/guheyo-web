import { ButtonOption } from '@/components/inputs/button-inputs';

export const parseAuctionDurationButtonOptions: ({
  selectedDuration,
}: {
  selectedDuration: number;
}) => ButtonOption[] = ({ selectedDuration }) =>
  [1, 2, 3, 4, 5].map((duration) => ({
    value: duration,
    label: `${duration}일`,
    selected: selectedDuration === duration,
  }));
