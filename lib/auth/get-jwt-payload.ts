import { JwtPayload } from '@/interfaces/auth.interfaces';
import { refreshTokens } from '@/lib/api/auth';
import { jwtDecode } from 'jwt-decode';

export const getJwtPayloadFromRefreshedTokens = async () => {
  const { data, errors } = await refreshTokens();
  if (errors?.length) throw errors[0];
  if (!data?.refreshTokens.accessToken) {
    throw new Error('NOT_FOUND_ACCESS_TOKEN');
  }
  const payload = jwtDecode(data?.refreshTokens.accessToken);
  return payload as JwtPayload;
};

export const getJwtPaytloadFromAccessToken = (accessToken: string) => {
  const payload = jwtDecode(accessToken);
  return payload as JwtPayload;
};
