import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Footer from "@/components/layout/Footer";

import { FOOTER_LINKS, FOOTER_COPYRIGHT } from "@/constant/footer.constants";

describe("Footer", () => {
  it("should render footer", () => {
    render(<Footer />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("should render brand name", () => {
    render(<Footer />);

    expect(
      screen.getByRole("link", {
        name: /KeDA Tech ERP/i,
      }),
    ).toBeInTheDocument();
  });

  it("should render all navigation links", () => {
    render(<Footer />);

    const navigation = screen.getByRole("navigation", {
      name: "Footer navigation",
    });

    FOOTER_LINKS.forEach((link) => {
      const element = navigation.querySelector(`a[href="${link.href}"]`);

      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent(link.label);
    });
  });

  it("should display copyright text", () => {
    render(<Footer />);

    expect(screen.getByText(FOOTER_COPYRIGHT)).toBeInTheDocument();
  });
});
