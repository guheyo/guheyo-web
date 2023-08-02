'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, createTheme } from '@mui/material';
import { ReduxProviders } from '@/redux/provider';

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

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProviders>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>{children}</SessionProvider>
        </QueryClientProvider>
      </ReduxProviders>
    </ThemeProvider>
  );
}
