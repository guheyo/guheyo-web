import { Device } from '@/hooks/use-device-detect';

const DEFAULT_INPUT_TEXT_MOBILE_FONT_SIZE = '16px';

const DEFAULT_INPUT_TEXT_BROWSER_FONT_SIZE = '18px';

const DEFAULT_INPUT_TEXT_MOBILE_MIN_WIDTH = 360;

const DEFAULT_INPUT_TEXT_BROWSER_MIN_WIDTH = 550;

export const getInputTextFontSize = (device: Device) =>
  device === 'mobile'
    ? DEFAULT_INPUT_TEXT_MOBILE_FONT_SIZE
    : DEFAULT_INPUT_TEXT_BROWSER_FONT_SIZE;

export const getInputTextMinWidth = (device: Device) =>
  device === 'mobile'
    ? DEFAULT_INPUT_TEXT_MOBILE_MIN_WIDTH
    : DEFAULT_INPUT_TEXT_BROWSER_MIN_WIDTH;
