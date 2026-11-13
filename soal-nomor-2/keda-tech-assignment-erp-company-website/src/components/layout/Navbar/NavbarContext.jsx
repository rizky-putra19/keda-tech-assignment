import { createContext, useContext, useState } from "react";

import { useAuthModalStore } from "@/stores/useAuthModalStore";

const NavbarContext = createContext(null);

export function NavbarProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openModal = useAuthModalStore((state) => state.openModal);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  const handleLogin = () => {
    setIsMenuOpen(false);
    openModal();
  };

  return (
    <NavbarContext.Provider
      value={{
        isMenuOpen,
        handleToggleMenu,
        handleNavigation,
        handleLogin,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbarContext() {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error("useNavbarContext must be used within NavbarProvider");
  }

  return context;
}
