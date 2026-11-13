import { beforeEach, describe, expect, it } from "vitest";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Pricing from "@/components/sections/Pricing";
import { PRICING_PLANS } from "@/constant/pricing.constants";
import { useAuthModalStore } from "@/stores/useAuthModalStore";

describe("Pricing", () => {
  beforeEach(() => {
    useAuthModalStore.getState().closeModal();
  });

  it("should render all pricing plans", () => {
    render(<Pricing />);

    PRICING_PLANS.forEach((plan) => {
      expect(
        screen.getByRole("heading", {
          name: plan.name,
        }),
      ).toBeInTheDocument();

      expect(screen.getByText(plan.price)).toBeInTheDocument();
    });
  });

  it("should display popular badge for Business", () => {
    render(<Pricing />);

    expect(screen.getByText("PALING POPULER")).toBeInTheDocument();
  });

  it("should open registration modal with selected plan", async () => {
    const user = userEvent.setup();

    render(<Pricing />);

    await user.click(
      screen.getByRole("button", {
        name: "Pilih Business",
      }),
    );

    const state = useAuthModalStore.getState();

    expect(state.isOpen).toBe(true);
    expect(state.selectedPlan).toBe("Business");
  });

  it("should render the correct features for each plan", () => {
    render(<Pricing />);

    const cards = document.querySelectorAll(".pricing__card");

    expect(cards).toHaveLength(PRICING_PLANS.length);

    PRICING_PLANS.forEach((plan, index) => {
      const featureItems = cards[index].querySelectorAll(".pricing__feature");

      expect(featureItems).toHaveLength(plan.features.length);
    });
  });
});
