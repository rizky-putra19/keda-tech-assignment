import { test, expect } from "@playwright/test";

const openLoginModal = async (page) => {
  await page.locator(".navbar__login:visible").click();

  const modal = page.getByRole("dialog");

  await expect(modal).toBeVisible();

  return modal;
};

test.describe("Login Modal E2E", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should open login modal from navbar", async ({ page }) => {
    const modal = await openLoginModal(page);

    await expect(
      modal.getByRole("heading", {
        name: "Selamat Datang",
      }),
    ).toBeVisible();

    await expect(
      modal.getByRole("textbox", {
        name: "Email",
      }),
    ).toBeVisible();

    await expect(modal.getByLabel("Password")).toBeVisible();
  });

  test("should close modal using close button", async ({ page }) => {
    const modal = await openLoginModal(page);

    await modal
      .getByRole("button", {
        name: "Tutup modal",
      })
      .click();

    await expect(modal).not.toBeVisible();
  });

  test("should close modal using Escape key", async ({ page }) => {
    const modal = await openLoginModal(page);

    await page.keyboard.press("Escape");

    await expect(modal).not.toBeVisible();
  });

  test("should close modal when backdrop is clicked", async ({ page }) => {
    const modal = await openLoginModal(page);

    const backdrop = page.locator(".login-modal__backdrop");

    await expect(backdrop).toBeVisible();

    const point = await backdrop.evaluate((element) => {
      const rect = element.getBoundingClientRect();

      const candidates = [
        { x: 2, y: 2 },
        { x: window.innerWidth - 2, y: 2 },
        { x: 2, y: window.innerHeight - 2 },
        { x: window.innerWidth - 2, y: window.innerHeight - 2 },
      ];

      return (
        candidates.find(
          ({ x, y }) => document.elementFromPoint(x, y) === element,
        ) ?? null
      );
    });

    expect(point, "No clickable backdrop area found").not.toBeNull();

    await page.mouse.click(point.x, point.y);

    await expect(modal).not.toBeVisible();
  });

  test("should validate required login fields", async ({ page }) => {
    const modal = await openLoginModal(page);

    const email = modal.getByLabel("Email");
    const password = modal.getByLabel("Password");

    await modal.getByRole("button", { name: "Masuk" }).click();

    const emailValidity = await email.evaluate((input) => ({
      valueMissing: input.validity.valueMissing,
      valid: input.validity.valid,
    }));

    const passwordValidity = await password.evaluate((input) => ({
      valueMissing: input.validity.valueMissing,
      valid: input.validity.valid,
    }));

    expect(emailValidity.valueMissing).toBe(true);
    expect(emailValidity.valid).toBe(false);

    expect(passwordValidity.valueMissing).toBe(true);
    expect(passwordValidity.valid).toBe(false);

    await expect(modal.getByRole("status")).toHaveCount(0);
  });

  test("should display login success message", async ({ page }) => {
    const modal = await openLoginModal(page);

    await modal.getByLabel("Email").fill("test@example.com");

    await modal.getByLabel("Password").fill("password123");

    await modal
      .getByRole("button", {
        name: "Masuk",
      })
      .click();

    await expect(modal.getByRole("status")).toHaveText("Login Sukses!");
  });

  test("should open registration modal from pricing", async ({ page }) => {
    const pricing = page.locator("#pricing");

    await pricing.scrollIntoViewIfNeeded();

    await pricing
      .getByRole("button", {
        name: "Pilih Business",
      })
      .click();

    const modal = page.getByRole("dialog");

    await expect(modal).toBeVisible();

    await expect(
      modal.getByRole("heading", {
        name: "Mulai dengan paket Business",
      }),
    ).toBeVisible();

    await modal.getByLabel("Email").fill("business@example.com");

    await modal.getByLabel("Password").fill("password123");

    await modal
      .getByRole("button", {
        name: "Daftar Akun",
      })
      .click();

    await expect(modal.getByRole("status")).toHaveText("Daftar Sukses!");
  });

  test("should lock background scroll while modal is open", async ({
    page,
  }) => {
    const modal = await openLoginModal(page);

    await expect
      .poll(() => page.evaluate(() => document.body.style.overflow))
      .toBe("hidden");

    await page.keyboard.press("Escape");

    await expect(modal).not.toBeVisible();

    await expect
      .poll(() => page.evaluate(() => document.body.style.overflow))
      .not.toBe("hidden");
  });
});
