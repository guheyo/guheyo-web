import { useEffect, useState } from 'react';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';

export const useDeviceDetect = () => {
  const [device, setDevice] = useState<string>();

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
