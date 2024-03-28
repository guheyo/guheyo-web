import { createContext, useEffect, useMemo, useState } from 'react';
import { getJwtPayloadFromRefreshedTokens } from '@/lib/auth/get-jwt-payload';
import { JwtPayload, JwtPayloadResult } from '@/interfaces/auth.interfaces';

export const AuthContext = createContext<JwtPayloadResult>({
  jwtPayload: null,
  error: null,
  loading: true,
});

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const [jwtPayload, setJwtPayload] = useState<JwtPayload | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const refreshTokens = async () => {
    setLoading(true);
    try {
      setJwtPayload(await getJwtPayloadFromRefreshedTokens());
      setError(null);
    } catch (e: any) {
      setError(e);
      setJwtPayload(null);
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

  const contextValue = useMemo(
    () => ({ jwtPayload, error, loading }),
    [jwtPayload, error, loading],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
