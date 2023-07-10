import axios from "axios";
import _ from "lodash";

export const client = axios.create();
client.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}:${process.env.NEXT_PUBLIC_API_PORT}/api`;
client.defaults.headers.post['Content-Type'] = 'application/json';
client.defaults.headers.get['Cache-Control'] = 'no-store';
client.defaults.headers.get['Pragma'] = 'no-store';
client.interceptors.response.use(res => {
  castExpiresToDate(res.data);
  return res;
});

const castExpiresToDate = (body: any) => {
  if (body === null || body === undefined || typeof body !== 'object') {
    return body;
  }
  for (const key of Object.keys(body)) {
    const value = body[key];
    if (key === 'expires') {
      body[key] = new Date(value);
    } else if (typeof value === 'object') castExpiresToDate(value);
  }
};

export default client;

export type Client = typeof client;