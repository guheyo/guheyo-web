import { User } from '@/interfaces/auth.interfaces';
import { refreshTokens } from '@/lib/api/auth';
import { jwtDecode } from 'jwt-decode';
import { useCallback } from 'react';

export const useGetUser = (token: string | null) =>
  useCallback(async () => {
    if (!token) {
      const { data, errors } = await refreshTokens();
      if (errors?.length) throw errors[0];
      if (!data?.accessToken) throw new Error('NOT_FOUND_ACCESS_TOKEN');
      const payload = jwtDecode(data?.accessToken);
      return payload as User;
    }
    const payload = jwtDecode(token);
    return payload as User;
  }, [token]);
