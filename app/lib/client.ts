import axios from 'axios';

export const client = axios.create();
client.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}:${process.env.NEXT_PUBLIC_API_PORT}/api`;
client.defaults.headers.post['Content-Type'] = 'application/json';
client.defaults.headers.get['Cache-Control'] = 'no-store';
client.defaults.headers.get.Pragma = 'no-store';

interface KeyValue {
  [key: string]: any;
}

const EXPIRES = 'expires';

const castExpiresToDate = (body: any): any => {
  if (body === null || body === undefined || typeof body !== 'object') {
    return body;
  }
  if (Array.isArray(body)) {
    return body.map((value) => castExpiresToDate(value));
  }

  const newBody: KeyValue = {};
  Object.keys(body).map((key) => {
    const value = body[key];
    newBody[key] = key === EXPIRES ? new Date(value) : castExpiresToDate(value);
    return newBody;
  });
  return newBody;
};

client.interceptors.response.use((res) => ({
  ...res,
  data: castExpiresToDate(res.data),
}));

export default client;

export type Client = typeof client;
