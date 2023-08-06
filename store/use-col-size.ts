import { create } from 'zustand';

type ColSize = 1 | 2;

interface ColSizeState {
  colSize: ColSize;
  toggleColSize: () => void;
}

export const useColSize = create<ColSizeState>((set, get) => ({
  colSize: 1,
  toggleColSize: () => set(() => ({ colSize: (get().colSize ^ 3) as ColSize })),
}));
