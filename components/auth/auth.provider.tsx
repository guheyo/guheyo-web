import { createContext, useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useGetUser } from '@/hooks/use-get-user';
import { Auth, User } from '@/interfaces/auth.interfaces';

export const AuthContext = createContext<Auth>({
  user: null,
  error: null,
});

export default function AuthProvider({ children }: React.PropsWithChildren) {
  const [cookie] = useCookies(['access-token']);
  const token = cookie['access-token'] as string | null;
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const getUser = useGetUser(token);

  useEffect(() => {
    async function setAuth() {
      try {
        return setUser(await getUser());
      } catch (e: any) {
        return setError(e);
      }
    }
    setAuth();
  }, [getUser]);

  const auth = useMemo(() => ({ user, error }), [user, error]);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
