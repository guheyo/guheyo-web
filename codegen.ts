import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://127.0.0.1:8080/graphql',
  generates: {
    './lib/graphql/': {
      preset: 'client',
    },
  },
};
export default config;
