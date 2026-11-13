import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Chatbot from "@/components/ui/ChatBot";

describe("Chatbot", () => {
  it("should render floating chatbot button", () => {
    render(<Chatbot />);

    expect(
      screen.getByRole("button", {
        name: "Buka chatbot",
      }),
    ).toBeInTheDocument();
  });

  it("should open chatbot panel", async () => {
    const user = userEvent.setup();

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Buka chatbot",
      }),
    );

    expect(
      screen.getByRole("region", {
        name: "Chatbot Assistant",
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("KeDA Tech Assistant")).toBeInTheDocument();
  });

  it("should close chatbot panel", async () => {
    const user = userEvent.setup();

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Buka chatbot",
      }),
    );

    const panel = screen.getByRole("region", {
      name: "Chatbot Assistant",
    });

    await user.click(
      within(panel).getByRole("button", {
        name: "Tutup chatbot",
      }),
    );

    expect(
      screen.queryByRole("region", {
        name: "Chatbot Assistant",
      }),
    ).not.toBeInTheDocument();
  });

  it("should send user message and display chatbot response", async () => {
    const user = userEvent.setup();

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Buka chatbot",
      }),
    );

    await user.type(
      screen.getByRole("textbox", {
        name: "Pesan chatbot",
      }),
      "Berapa harga paket?",
    );

    await user.click(
      screen.getByRole("button", {
        name: "Kirim pesan",
      }),
    );

    expect(screen.getByText("Berapa harga paket?")).toBeInTheDocument();

    expect(
      screen.getByText(/KeDa Tech ERP memiliki 3 paket/i),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", {
        name: "Pesan chatbot",
      }),
    ).toHaveValue("");
  });

  it("should display default response for unknown question", async () => {
    const user = userEvent.setup();

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Buka chatbot",
      }),
    );

    await user.type(
      screen.getByRole("textbox", {
        name: "Pesan chatbot",
      }),
      "Halo dunia",
    );

    await user.click(
      screen.getByRole("button", {
        name: "Kirim pesan",
      }),
    );

    expect(
      screen.getByText(/Terima kasih atas pertanyaannya/i),
    ).toBeInTheDocument();
  });

  it("should disable send button when input is empty", async () => {
    const user = userEvent.setup();

    render(<Chatbot />);

    await user.click(
      screen.getByRole("button", {
        name: "Buka chatbot",
      }),
    );

    expect(
      screen.getByRole("button", {
        name: "Kirim pesan",
      }),
    ).toBeDisabled();
  });
});
