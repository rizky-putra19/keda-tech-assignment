import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import About from "@/components/sections/About";

import {
  ABOUT_FEATURES,
  ABOUT_STOCK_PROGRESS,
} from "@/constant/about.constants";

describe("About", () => {
  it("should render About section", () => {
    render(<About />);

    expect(screen.getByText("ABOUT US")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /Semua kebutuhan operasional bisnis/i,
      }),
    ).toBeInTheDocument();
  });

  it("should render all features", () => {
    render(<About />);

    ABOUT_FEATURES.forEach((feature) => {
      expect(
        screen.getByRole("heading", {
          name: feature.title,
        }),
      ).toBeInTheDocument();
    });
  });

  it("should render stock progress values", () => {
    render(<About />);

    ABOUT_STOCK_PROGRESS.forEach((item) => {
      const progress = screen.getByRole("progressbar", {
        name: item.label,
      });

      expect(progress).toHaveAttribute("aria-valuenow", String(item.value));
    });
  });

  it("should render feature icons as images", () => {
    const { container } = render(<About />);

    expect(container.querySelectorAll(".about__feature-icon")).toHaveLength(
      ABOUT_FEATURES.length,
    );
  });
});
