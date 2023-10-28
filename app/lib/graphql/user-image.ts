export type UserImage = {
  id: string;
  createdAt: Date;
  name: string;
  url: string;
  contentType: string | null;
  description: string | null;
  height: number | null;
  width: number | null;
  position: number;
  type: string;
  refId: string;
  userId: string;
  source: string;
};
