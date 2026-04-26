import { test as setup, expect } from '@playwright/test';
import ENV from '../utils/env';

const authFile = 'src/utils/authentication.json';

setup('save authenticated session', async ({ page }) => {
  await page.goto(ENV.LOGIN_LINK);
  await page.locator('input[name="email"]').fill(ENV.VALID_EMAIL);
  await page.locator('input[name="password"]').fill(ENV.VALID_PASSWORD);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page).toHaveURL(ENV.HOME_PAGE_LINK, { timeout: 15000 });
  await page.context().storageState({ path: authFile });
});
