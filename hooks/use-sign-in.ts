import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useCallback } from 'react';

const getSignInURL = (provider: string) =>
  `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${provider}`;

const useSignIn = () => {
  const signIn = useCallback((router: AppRouterInstance, provider: string) => {
    router.push(getSignInURL(provider));
  }, []);

  return signIn;
};

export default useSignIn;
