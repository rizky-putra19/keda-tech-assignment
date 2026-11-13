import { test, expect } from "@playwright/test";

const navigateToSection = async (page, isMobile, section) => {
  if (isMobile) {
    const menuButton = page.getByRole("button", {
      name: "Open menu",
    });

    if (await menuButton.isVisible()) {
      await menuButton.click();
    }

    await page.locator(`.navbar__mobile-nav a[href="#${section}"]`).click();
  } else {
    await page.locator(`.navbar__desktop-nav a[href="#${section}"]`).click();
  }
};

test.describe("Navigation and Scroll E2E", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  for (const section of ["home", "about", "pricing", "contact"]) {
    test(`should scroll to ${section} section`, async ({ page, isMobile }) => {
      await navigateToSection(page, isMobile, section);

      await expect(page).toHaveURL(new RegExp(`#${section}$`));

      await expect(page.locator(`#${section}`)).toBeInViewport();
    });
  }

  test("should navigate from Contact back to Home", async ({
    page,
    isMobile,
  }) => {
    await navigateToSection(page, isMobile, "contact");

    await expect(page.locator("#contact")).toBeInViewport();

    await navigateToSection(page, isMobile, "home");

    await expect(page).toHaveURL(/#home$/);

    await expect(page.locator("#home")).toBeInViewport();
  });

  test("should open and close mobile menu", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile-only test");

    const menuButton = page.getByRole("button", {
      name: "Open menu",
    });

    await expect(menuButton).toHaveAttribute("aria-expanded", "false");

    await menuButton.click();

    await expect(menuButton).toHaveAttribute("aria-expanded", "true");

    await page.locator('.navbar__mobile-nav a[href="#pricing"]').click();

    await expect(page).toHaveURL(/#pricing$/);
  });
});
