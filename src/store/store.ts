import { create } from 'zustand';

type Store = {
  isOverlay: boolean;
  setIsOverlay: (val: boolean) => void;
};

export const appStore = create<Store>()((set) => ({
  isOverlay: false,
  setIsOverlay: (val: boolean) => set(() => ({ isOverlay: val })),
}));
