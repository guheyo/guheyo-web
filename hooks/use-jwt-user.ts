import { useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';
import { refreshTokens } from '@/lib/api/auth';
import { useEffect, useState } from 'react';
import { JwtUser } from '@/interfaces/jwt.interfaces';

export const useJwtUser = () => {
  const [cookie] = useCookies(['access-token']);
  const [jwtUser, setJwtUser] = useState<JwtUser | null>(null);
  const token = cookie['access-token'] as string | null;

  useEffect(() => {
    async function fetchTokens() {
      if (!token) {
        try {
          const { accessToken } = await refreshTokens();
          const payload = jwtDecode(accessToken) as JwtUser;
          setJwtUser(payload);
        } catch {
          setJwtUser(null);
        }
      } else {
        const payload = jwtDecode(token) as JwtUser;
        setJwtUser(payload);
      }
    }
    fetchTokens();
  }, [token]);

  return jwtUser;
};
