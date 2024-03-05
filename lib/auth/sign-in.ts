import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const getSignInURL = (provider: string) =>
  `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${provider}`;

const signIn = (router: AppRouterInstance, provider: string) => {
  router.push(getSignInURL(provider));
};

export default signIn;
