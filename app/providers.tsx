'use client';

import React from 'react';
import { ReduxProviders } from '@/redux/provider';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  // zustand devtools
  if (process.env.NODE_ENV === 'development') {
    // mountStoreDevtool('Store', useStore);
  }

  return (
    <ReduxProviders>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>{children}</SessionProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ReduxProviders>
  );
}
