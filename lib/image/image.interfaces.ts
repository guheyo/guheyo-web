export interface UserImage {
  id: string;
  name: string;
  position: number;
  url?: string;
}

export interface UploadedImage {
  file: File;

  userImage: UserImage;
}
