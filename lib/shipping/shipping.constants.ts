import { ShippingType } from './shipping.types';

export const SHIPPING_TYPE_LABEL_NAME = '택배 유형';

export const SHIPPING_COST_LABEL_NAME = '택배비';

export const SHIPPING_FREE = 'free';

export const SHIPPING_PREPAID = 'prepaid';

export const SHIPPING_HALF = 'half';

export const SHIPPING_TYPE_OPTIONS: {
  value: ShippingType;
  label: string;
}[] = [
  { value: SHIPPING_FREE, label: '포함' },
  { value: SHIPPING_PREPAID, label: '별도' },
  { value: SHIPPING_HALF, label: '반값 택배' },
];
