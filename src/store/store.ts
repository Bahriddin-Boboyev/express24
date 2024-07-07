import { create } from 'zustand';

type Store = {
  isOverlay: boolean;
  selectIsOpen: boolean;
  isMore: boolean;

  setIsOverlay: (val: boolean) => void;
  setSelectIsOpen: (val: boolean) => void;
  setIsMore: (val: boolean) => void;
};

export const appStore = create<Store>()((set) => ({
  isOverlay: false,
  selectIsOpen: false,
  isMore: false,

  setIsOverlay: (val: boolean) => set(() => ({ isOverlay: val })),
  setSelectIsOpen: (val: boolean) =>
    set(() => {
      return { selectIsOpen: val };
    }),
  setIsMore: (val: boolean) => set(() => ({ isMore: val })),
}));
