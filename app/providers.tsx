'use client';

import React from 'react';
import { ReduxProviders } from '@/redux/provider';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function Providers({ children }: {
  children: React.ReactNode
}) {
  return (
    <ReduxProviders>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </QueryClientProvider>
    </ReduxProviders>
  );
}