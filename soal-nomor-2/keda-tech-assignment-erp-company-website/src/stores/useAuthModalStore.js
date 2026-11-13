import { create } from "zustand";

export const useAuthModalStore = create((set) => ({
  isOpen: false,
  selectedPlan: null,

  openModal: (plan = null) =>
    set({
      isOpen: true,
      selectedPlan: plan,
    }),

  closeModal: () =>
    set({
      isOpen: false,
      selectedPlan: null,
    }),
}));
