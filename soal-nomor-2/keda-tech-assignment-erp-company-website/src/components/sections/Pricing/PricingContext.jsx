import { createContext, useContext, useCallback } from "react";
import { useAuthModalStore } from "@/stores/useAuthModalStore";

const PricingContext = createContext(null);

export function PricingProvider({ children }) {
  const openModal = useAuthModalStore((state) => state.openModal);

  const handleSelectPlan = useCallback(
    (planName) => {
      openModal(planName);
    },
    [openModal],
  );

  return (
    <PricingContext.Provider value={{ handleSelectPlan }}>
      {children}
    </PricingContext.Provider>
  );
}

export function usePricing() {
  const context = useContext(PricingContext);

  if (!context) {
    throw new Error("usePricing must be used within PricingProvider");
  }

  return context;
}
