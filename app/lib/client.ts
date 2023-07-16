import axios from 'axios';

export const client = axios.create();
client.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}:${process.env.NEXT_PUBLIC_API_PORT}/api`;
client.defaults.headers.post['Content-Type'] = 'application/json';
client.defaults.headers.get['Cache-Control'] = 'no-store';
client.defaults.headers.get.Pragma = 'no-store';

const castExpiresToDate = (body: any) => {
  if (body === null || body === undefined || typeof body !== 'object') {
    return body;
  }
  let newBody = {};
  Object.keys(body).map((key) => {
    const value = body[key];
    if (key === 'expires') {
      newBody = {
        ...newBody,
        key: new Date(value),
      };
    } else {
      newBody = {
        ...newBody,
        key: castExpiresToDate(value),
      };
    }
    return newBody;
  });
  return newBody;
};
client.interceptors.response.use((res) => {
  castExpiresToDate(res.data);
  return res;
});

export default client;

export type Client = typeof client;
