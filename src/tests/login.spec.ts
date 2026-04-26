import { test, expect } from '@playwright/test';
import ENV from '../utils/env';
import { LoginPage } from '../pages/loginPage';
import { ProfilePage } from '../pages/profilePage';

test.describe.serial('Login tests', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto(ENV.LOGIN_LINK);
  });

  test('Successful login with valid credentials', async ({ page }) => {
    await test.step('Fill in valid credentials and submit', async () => {
      await loginPage.login(ENV.VALID_EMAIL, ENV.VALID_PASSWORD);
    });

    await test.step('Verify redirect to dashboard', async () => {
      await expect(page).toHaveURL(ENV.HOME_PAGE_LINK, { timeout: 15000 });
    });
  });

  test('Unsuccessful login with invalid credentials', async () => {
    await test.step('Fill in invalid credentials and submit', async () => {
      await loginPage.login(ENV.NONEXISTING_EMAIL, ENV.VALID_PASSWORD);
    });

    await test.step('Verify error message is displayed', async () => {
      await expect(loginPage.errorNotification).toBeVisible({ timeout: 10000 });
      expect(await loginPage.getErrorMessage()).toBe(ENV.INVALID_CREDENTIALS_MESSAGE);
    });
  });
});

test.describe.serial('Logout tests', () => {
  let profilePage: ProfilePage;

  test.beforeEach(async ({ page }) => {
    profilePage = new ProfilePage(page);
    await page.goto(ENV.HOME_PAGE_LINK);
  });

  test('Successful logout', async ({ page }) => {
    await test.step('Click Sign out from profile dropdown', async () => {
      await profilePage.signOut();
    });

    await test.step('Verify redirect to sign-in page', async () => {
      await expect(page).toHaveURL(ENV.LOGIN_LINK, { timeout: 10000 });
    });
  });
});
