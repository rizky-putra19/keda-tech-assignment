import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Contact from "@/components/sections/Contact";

describe("Contact", () => {
  it("should render contact form fields", () => {
    render(<Contact />);

    expect(screen.getByLabelText("Nama Lengkap")).toBeInTheDocument();

    expect(screen.getByLabelText("Email")).toBeInTheDocument();

    expect(screen.getByLabelText("Pesan")).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Kirim Pesan",
      }),
    ).toBeInTheDocument();
  });

  it("should update form input values", async () => {
    const user = userEvent.setup();

    render(<Contact />);

    await user.type(screen.getByLabelText("Nama Lengkap"), "Rizky");

    await user.type(screen.getByLabelText("Email"), "rizky@example.com");

    expect(screen.getByLabelText("Nama Lengkap")).toHaveValue("Rizky");

    expect(screen.getByLabelText("Email")).toHaveValue("rizky@example.com");
  });

  it("should prevent submission when email is invalid", async () => {
    const user = userEvent.setup();

    render(<Contact />);

    await user.type(screen.getByLabelText("Nama Lengkap"), "Rizky");

    await user.type(screen.getByLabelText("Email"), "invalid-email");

    await user.type(
      screen.getByLabelText("Pesan"),
      "Saya ingin mengetahui fitur ERP.",
    );

    await user.click(
      screen.getByRole("button", {
        name: "Kirim Pesan",
      }),
    );

    expect(screen.getByLabelText("Email").checkValidity()).toBe(false);

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("should display success message and reset form", async () => {
    const user = userEvent.setup();

    render(<Contact />);

    await user.type(screen.getByLabelText("Nama Lengkap"), "Rizky");

    await user.type(screen.getByLabelText("Email"), "rizky@example.com");

    await user.type(
      screen.getByLabelText("Pesan"),
      "Saya tertarik menggunakan KeDA Tech ERP.",
    );

    await user.click(
      screen.getByRole("button", {
        name: "Kirim Pesan",
      }),
    );

    expect(screen.getByRole("status")).toHaveTextContent(
      "Pesan berhasil dikirim. Tim kami akan segera merespon 1 x 24jam yaa!",
    );

    expect(screen.getByLabelText("Nama Lengkap")).toHaveValue("");

    expect(screen.getByLabelText("Email")).toHaveValue("");

    expect(screen.getByLabelText("Pesan")).toHaveValue("");
  });
});
