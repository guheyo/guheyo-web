import { makeVar } from '@apollo/client';

// Initialize with undefined so we can set it later
export const isBidModeVar = makeVar<boolean | undefined>(undefined);
