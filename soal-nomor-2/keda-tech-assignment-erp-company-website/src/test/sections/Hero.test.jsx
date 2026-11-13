import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Hero from "@/components/sections/Hero";

import {
  HERO_STATISTICS,
  HERO_CHART_DATA,
  HERO_BENEFITS,
} from "@/constant/hero.constants";

describe("Hero", () => {
  it("should render hero section", () => {
    const { container } = render(<Hero />);

    expect(container.querySelector(".hero")).toBeInTheDocument();
  });

  it("should render dashboard statistics", () => {
    render(<Hero />);

    HERO_STATISTICS.forEach((statistic) => {
      expect(screen.getByText(statistic.label)).toBeInTheDocument();

      expect(screen.getByText(statistic.value)).toBeInTheDocument();
    });
  });

  it("should render all chart bars", () => {
    const { container } = render(<Hero />);

    expect(container.querySelectorAll(".hero__chart-bar")).toHaveLength(
      HERO_CHART_DATA.length,
    );
  });

  it("should render all benefits", () => {
    render(<Hero />);

    HERO_BENEFITS.forEach((benefit) => {
      expect(screen.getByText(benefit)).toBeInTheDocument();
    });
  });
});
