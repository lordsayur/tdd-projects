import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Stop Watch - Vanilla/);
});

test("start and stop button has correct disabled state", async ({ page }) => {
  await page.goto("/");

  const startBtn = page.getByRole("button", { name: "Start" });

  await startBtn.click();

  expect(startBtn).toBeDisabled();

  const stopBtn = page.getByRole("button", { name: "Stop" });

  await stopBtn.click();

  await expect(stopBtn).toBeDisabled();
});
