import { useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';
import { refreshTokens } from '@/lib/api/auth';
import { useEffect, useState } from 'react';
import { JwtUser } from '@/interfaces/jwt.interfaces';

const useJwtUser = () => {
  const [cookie] = useCookies(['access-token']);
  const [jwtUser, setJwtUser] = useState<JwtUser | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const token = cookie['access-token'] as string | null;

  useEffect(() => {
    async function fetchTokens() {
      try {
        if (!token) {
          const { data: accessToken, errors } = await refreshTokens();
          if (errors?.length) setError(errors[0]);
          const payload = jwtDecode(accessToken) as JwtUser;
          setJwtUser(payload);
        } else {
          const payload = jwtDecode(token) as JwtUser;
          setJwtUser(payload);
        }
      } catch (e) {
        setError(e as any);
      }
    }
    fetchTokens();
  }, [token]);

  return {
    data: jwtUser,
    error,
  };
};

export default useJwtUser;
