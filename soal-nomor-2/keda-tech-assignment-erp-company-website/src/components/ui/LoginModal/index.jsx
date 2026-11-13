import { LoginModalProvider } from "./LoginModalContext";

import LoginModalUI from "./LoginModalUI";

export default function LoginModal() {
  return (
    <LoginModalProvider>
      <LoginModalUI />
    </LoginModalProvider>
  );
}
