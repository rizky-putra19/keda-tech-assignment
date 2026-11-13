import { beforeEach, describe, expect, it } from "vitest";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Navbar from "@/components/layout/Navbar";
import { useAuthModalStore } from "@/stores/useAuthModalStore";

describe("Navbar", () => {
  beforeEach(() => {
    useAuthModalStore.getState().closeModal();
  });

  it("should render navigation", () => {
    render(<Navbar />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("should open login modal state when LOGIN is clicked", async () => {
    const user = userEvent.setup();

    render(<Navbar />);

    const loginButtons = screen.getAllByRole("button", {
      name: /login/i,
    });

    await user.click(loginButtons[0]);

    expect(useAuthModalStore.getState().isOpen).toBe(true);

    expect(useAuthModalStore.getState().selectedPlan).toBeNull();
  });
});
