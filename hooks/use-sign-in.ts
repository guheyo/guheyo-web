import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const getSignInURL = (provider: string) =>
  `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${provider}`;

export const useSignIn = () => {
  const router = useRouter();

  const signIn = useCallback(
    (provider: string) => {
      router.push(getSignInURL(provider));
    },
    [router],
  );

  return signIn;
};
