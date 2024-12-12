'use client';

import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support';
import { makeClient } from './client';

export default function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
