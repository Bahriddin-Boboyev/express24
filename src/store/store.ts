import { create } from 'zustand';

type Store = {
  isOverlay: boolean;
  selectIsOpen: boolean;

  setIsOverlay: (val: boolean) => void;
  setSelectIsOpen: (val: boolean) => void;
};

export const appStore = create<Store>()((set) => ({
  isOverlay: false,
  selectIsOpen: false,

  setIsOverlay: (val: boolean) => set(() => ({ isOverlay: val })),
  setSelectIsOpen: (val: boolean) => set(() => ({ selectIsOpen: val })),
}));
