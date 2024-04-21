import { useEffect, useState } from 'react';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';

export type Device = 'mobile' | 'tablet' | 'browser';

export const useDeviceDetect = () => {
  const [device, setDevice] = useState<Device>('mobile');

  useEffect(() => {
    if (isMobile) {
      setDevice('mobile');
    } else if (isTablet) {
      setDevice('tablet');
    } else if (isBrowser) {
      setDevice('browser');
    }
  }, []);
  return device;
};
