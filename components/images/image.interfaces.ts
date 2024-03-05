import { Device } from '@/hooks/use-device-detect';

export interface UploadedUserImage {
  file: File;

  info: {
    id: string;
    type: string;
    refId: string;
    userId: string;
    position: number;
    device: Device;
  };
}
