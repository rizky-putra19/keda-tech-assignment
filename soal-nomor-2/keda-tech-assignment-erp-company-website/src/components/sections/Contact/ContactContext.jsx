import { createContext, useCallback, useContext, useState } from "react";

import { CONTACT_SUCCESS_MESSAGE } from "@/constant/contact.constants";

const ContactContext = createContext(null);

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export function ContactProvider({ children }) {
  const [form, setForm] = useState(initialForm);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatusMessage("");
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    setStatusMessage(CONTACT_SUCCESS_MESSAGE);
    setForm({ ...initialForm });
  }, []);

  const value = {
    form,
    statusMessage,
    handleChange,
    handleSubmit,
  };

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);

  if (!context) {
    throw new Error("useContact must be used within ContactProvider");
  }

  return context;
}
