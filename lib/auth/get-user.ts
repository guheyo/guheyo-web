import { User } from '@/interfaces/auth.interfaces';
import { refreshTokens } from '@/lib/api/auth';
import { jwtDecode } from 'jwt-decode';

const getUserFromRefreshedTokens = async () => {
  const { data, errors } = await refreshTokens();
  if (errors?.length) throw errors[0];
  if (!data?.accessToken) throw new Error('NOT_FOUND_ACCESS_TOKEN');
  const payload = jwtDecode(data?.accessToken);
  return payload as User;
};

const getUserFromToken = (token: string) => {
  const payload = jwtDecode(token);
  return payload as User;
};

const getUser = async (token: string | null) => {
  if (!token) {
    return getUserFromRefreshedTokens();
  }
  return getUserFromToken(token);
};

export default getUser;
