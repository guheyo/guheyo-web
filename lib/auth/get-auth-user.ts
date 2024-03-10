import { AuthUser } from '@/interfaces/auth.interfaces';
import { refreshTokens } from '@/lib/api/auth';
import { jwtDecode } from 'jwt-decode';

export const getAuthUserFromRefreshedTokens = async () => {
  const { data, errors } = await refreshTokens();
  if (errors?.length) throw errors[0];
  if (!data?.refreshTokens.accessToken) {
    throw new Error('NOT_FOUND_ACCESS_TOKEN');
  }
  const payload = jwtDecode(data?.refreshTokens.accessToken);
  return payload as AuthUser;
};

export const getAuthUserFromAccessToken = (accessToken: string) => {
  const payload = jwtDecode(accessToken);
  return payload as AuthUser;
};
