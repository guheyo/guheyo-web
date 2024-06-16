import axios from 'axios';
import { createSignedUrl } from '@/lib/api/user-image';

const uploadToS3 = async ({ file, type }: { file: File; type: string }) => {
  if (file.size > 1024 * 1024 * 15) {
    const e = new Error('File is too big');
    e.name = 'FileToBig';
    throw e;
  }
  if (!file.type.includes('image/')) {
    const e = new Error('Not an image');
    e.name = 'NotAnImage';
    throw e;
  }

  const { data, errors } = await createSignedUrl({
    filename: file.name,
    type,
  });
  if (errors?.length) throw errors[0];
  if (!data?.createSignedUrl) throw new Error('SIGNED_URL_NOT_FOUND');

  await axios.put(data.createSignedUrl.signedUrl, file, {
    headers: {
      'Content-Type': file.type,
    },
  });

  return data.createSignedUrl.url;
};

export default uploadToS3;
