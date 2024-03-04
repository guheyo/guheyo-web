export interface UploadedUserImage {
  file: File;

  info: {
    type: string;
    userId: string;
  };
}
