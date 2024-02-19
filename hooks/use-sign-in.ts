import { useRouter } from 'next/navigation';

const getSignInURL = (provider: string) =>
  `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${provider}`;

export const useSignIn = () => {
  const router = useRouter();

  function signIn(provider: string) {
    router.push(getSignInURL(provider));
  }

  return signIn;
};
