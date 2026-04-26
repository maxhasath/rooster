import { test, expect } from '@playwright/test';
import ENV from '../utils/env';
import { OnboardPage } from '../pages/onboardPage';

test.describe.serial('Onboard tests', () => {
  let onboardPage: OnboardPage;

  test.beforeEach(async ({ page }) => {
    onboardPage = new OnboardPage(page);
    await page.goto(ENV.HOME_PAGE_LINK);
  });

  test('Navigate to Onboard New Employee', async ({ page }) => {
    await test.step('Click Manage then click Onboard', async () => {
      await onboardPage.navigateToOnboard();
      await expect(page).toHaveURL(ENV.ONBOARD_URL, { timeout: 10000 });
    });

    await test.step('Click Onboard New Employee button', async () => {
      await onboardPage.clickOnboardNewEmployee();
      await expect(page).toHaveURL(ENV.ONBOARD_NEW_EMPLOYEE_URL, { timeout: 10000 });
    });

    await test.step('Verify Basics section is visible', async () => {
      await expect(onboardPage.basicsHeading).toBeVisible({ timeout: 10000 });
    });
  });
});
