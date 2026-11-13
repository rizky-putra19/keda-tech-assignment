import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LoginModal from "@/components/ui/LoginModal";
import { useAuthModalStore } from "@/stores/useAuthModalStore";

describe("LoginModal", () => {
  beforeEach(() => {
    useAuthModalStore.getState().closeModal();
  });

  it("should not display modal initially", () => {
    render(<LoginModal />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should display login modal when opened", async () => {
    const user = userEvent.setup();

    render(
      <>
        <button onClick={() => useAuthModalStore.getState().openModal()}>
          Open Login
        </button>

        <LoginModal />
      </>,
    );

    await user.click(screen.getByRole("button", { name: "Open Login" }));

    expect(screen.getByRole("dialog")).toBeInTheDocument();

    expect(screen.getByText("Selamat Datang")).toBeInTheDocument();
  });

  it("should show login success message", async () => {
    const user = userEvent.setup();

    useAuthModalStore.getState().openModal();

    render(<LoginModal />);

    await user.type(screen.getByLabelText("Email"), "test@example.com");

    await user.type(screen.getByLabelText("Password"), "password123");

    await user.click(screen.getByRole("button", { name: "Masuk" }));

    expect(screen.getByRole("status")).toHaveTextContent("Login Sukses!");
  });

  it("should show registration success for a selected plan", async () => {
    const user = userEvent.setup();

    useAuthModalStore.getState().openModal("Business");

    render(<LoginModal />);

    expect(screen.getByText("Mulai dengan paket Business")).toBeInTheDocument();

    await user.type(screen.getByLabelText("Email"), "test@example.com");

    await user.type(screen.getByLabelText("Password"), "password123");

    await user.click(screen.getByRole("button", { name: "Daftar Akun" }));

    expect(screen.getByRole("status")).toHaveTextContent("Daftar Sukses!");
  });

  it("should close modal when close button is clicked", async () => {
    const user = userEvent.setup();

    useAuthModalStore.getState().openModal();

    render(<LoginModal />);

    await user.click(
      screen.getByRole("button", {
        name: "Tutup modal",
      }),
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should close modal when Escape is pressed", async () => {
    const user = userEvent.setup();

    useAuthModalStore.getState().openModal();

    render(<LoginModal />);

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
