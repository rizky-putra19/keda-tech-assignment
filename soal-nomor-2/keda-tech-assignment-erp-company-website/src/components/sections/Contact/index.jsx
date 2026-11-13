import { ContactProvider } from "./ContactContext";
import ContactUI from "./ContactUI";

export default function Contact() {
  return (
    <ContactProvider>
      <ContactUI />
    </ContactProvider>
  );
}
