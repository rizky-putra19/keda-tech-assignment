import { NavbarProvider } from "./NavbarContext";
import NavbarUI from "./NavbarUI";

export default function Navbar() {
  return (
    <NavbarProvider>
      <NavbarUI />
    </NavbarProvider>
  );
}
