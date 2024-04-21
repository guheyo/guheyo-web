import { useEffect, useState } from 'react';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';

export type Device = 'mobile' | 'tablet' | 'browser';

export const useDeviceDetect = () => {
  const [device, setDevice] = useState<Device>('mobile');

  useEffect(() => {
    const handleResize = () => {
      if (isMobile) {
        setDevice('mobile');
      } else if (isTablet) {
        setDevice('tablet');
      } else if (isBrowser) {
        setDevice('browser');
      }
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return device;
};
