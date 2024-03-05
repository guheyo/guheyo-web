import { createContext, useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Auth, User } from '@/interfaces/auth.interfaces';
import getUser from '@/lib/auth/get-user';

export const AuthContext = createContext<Auth>({
  user: null,
  error: null,
});

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const [cookie] = useCookies(['access-token']);
  const token = cookie['access-token'] as string | null;
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function setAuth() {
      try {
        setUser(await getUser(token));
        setError(null);
      } catch (e: any) {
        setError(e);
        setUser(null);
      }
    }
    setAuth();
  }, [token]);

  const auth = useMemo(() => ({ user, error }), [user, error]);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
