import { createContext, useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Auth, AuthUser } from '@/interfaces/auth.interfaces';
import getAuthUser from '@/lib/auth/get-auth-user';

export const AuthContext = createContext<Auth>({
  user: null,
  error: null,
  loading: true,
});

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const [cookie] = useCookies(['access-token']);
  const accessToken = cookie['access-token'] as string | null;
  const [user, setUser] = useState<AuthUser | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const setAuth = async () => {
    setLoading(true);
    try {
      setUser(await getAuthUser(accessToken));
      setError(null);
    } catch (e: any) {
      setError(e);
      setUser(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    const intervalId = setInterval(
      setAuth,
      parseInt(process.env.NEXT_PUBLIC_JWT_REFRESH_TOKENS_INTERVAL_MS!, 10),
    );
    setAuth();
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  const auth = useMemo(
    () => ({ user, error, loading }),
    [user, error, loading],
  );

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
