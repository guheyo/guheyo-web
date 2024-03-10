import { createContext, useEffect, useMemo, useState } from 'react';
import { Auth, AuthUser } from '@/interfaces/auth.interfaces';
import { getAuthUserFromRefreshedTokens } from '@/lib/auth/get-auth-user';

export const AuthContext = createContext<Auth>({
  user: null,
  error: null,
  loading: true,
});

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const refreshTokens = async () => {
    setLoading(true);
    try {
      setUser(await getAuthUserFromRefreshedTokens());
      setError(null);
    } catch (e: any) {
      setError(e);
      setUser(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    const intervalId = setInterval(
      refreshTokens,
      parseInt(process.env.NEXT_PUBLIC_JWT_REFRESH_TOKENS_INTERVAL_MS!, 10),
    );
    refreshTokens();
    return () => clearInterval(intervalId);
  }, []);

  const auth = useMemo(
    () => ({ user, error, loading }),
    [user, error, loading],
  );

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
