import { create } from "zustand";

export const useModal = create((set) => ({
  open: false,
  cardType: undefined,
  isOpen: (cardType) => set({ open: true, cardType }),
  isClose: () => set({ open: false, cardType: undefined }),
}));
