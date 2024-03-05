'use client';

import React from 'react';
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import ApolloWrapper from '@/lib/apollo/apollo-provider';
import AuthProvider from '@/components/auth/auth.provider';

// dayjs config
dayjs.extend(relativeTime);
dayjs.locale('ko');

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

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloWrapper>
      <AuthProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledEngineProvider>
      </AuthProvider>
    </ApolloWrapper>
  );
}
