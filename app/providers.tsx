'use client';

import React from 'react';
import { ReduxProviders } from '@/redux/provider';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, createTheme } from '@mui/material';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

/**
 * MUI preflight Disable
 */
const theme = createTheme({
  palette: {
    // Your color palette here
  },
  typography: {
    // Your typography settings here
  },
  // Other Material-UI customizations
  // ...
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Disable preflight styles by setting it to an empty object
      },
    },
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  // zustand devtools
  if (process.env.NODE_ENV === 'development') {
    // mountStoreDevtool('Store', useStore);
  }

  return (
    <ThemeProvider theme={theme}>
      <ReduxProviders>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>{children}</SessionProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ReduxProviders>
    </ThemeProvider>
  );
}
