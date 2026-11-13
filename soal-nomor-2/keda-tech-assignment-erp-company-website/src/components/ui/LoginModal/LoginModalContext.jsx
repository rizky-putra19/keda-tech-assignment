import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { useAuthModalStore } from "@/stores/useAuthModalStore";

const LoginModalContext = createContext(null);

export function LoginModalProvider({ children }) {
  const isOpen = useAuthModalStore((state) => state.isOpen);

  const selectedPlan = useAuthModalStore((state) => state.selectedPlan);

  const closeModal = useAuthModalStore((state) => state.closeModal);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const emailRef = useRef(null);
  const modalRef = useRef(null);
  const previousFocusRef = useRef(null);

  const resetForm = useCallback(() => {
    setForm({
      email: "",
      password: "",
    });

    setMessage("");
  }, []);

  const handleClose = useCallback(() => {
    resetForm();
    closeModal();
  }, [resetForm, closeModal]);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      setMessage(selectedPlan ? "Daftar Sukses!" : "Login Sukses!");
    },
    [selectedPlan],
  );

  const handleBackdropClick = useCallback(
    (event) => {
      if (event.target === event.currentTarget) {
        handleClose();
      }
    },
    [handleClose],
  );

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusFrame = requestAnimationFrame(() => {
      emailRef.current?.focus();
    });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = modalRef.current?.querySelectorAll(
        'button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) {
        event.preventDefault();
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);

      document.body.style.overflow = previousOverflow;

      document.removeEventListener("keydown", handleKeyDown);

      previousFocusRef.current?.focus();
    };
  }, [isOpen, handleClose]);

  const title = selectedPlan
    ? `Mulai dengan paket ${selectedPlan}`
    : "Selamat Datang";

  const description = selectedPlan
    ? `Daftar untuk melanjutkan paket ${selectedPlan}.`
    : "Masuk ke akun KeDA Tech ERP Anda.";

  const buttonMessage = selectedPlan ? "Daftar Akun" : "Masuk";

  const value = {
    isOpen,
    selectedPlan,
    form,
    message,
    title,
    buttonMessage,
    description,
    emailRef,
    modalRef,
    handleChange,
    handleSubmit,
    handleClose,
    handleBackdropClick,
  };

  return (
    <LoginModalContext.Provider value={value}>
      {children}
    </LoginModalContext.Provider>
  );
}

export function useLoginModal() {
  const context = useContext(LoginModalContext);

  if (!context) {
    throw new Error("useLoginModal must be used within LoginModalProvider");
  }

  return context;
}
