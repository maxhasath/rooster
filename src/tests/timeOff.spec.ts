import { test, expect } from '@playwright/test';
import ENV from '../utils/env';
import { TimeOffPage } from '../pages/timeOffPage';

test.describe.serial('Time Off tests', () => {
  let timeOffPage: TimeOffPage;

  test.beforeEach(async ({ page }) => {
    timeOffPage = new TimeOffPage(page);
    await page.goto(ENV.HOME_PAGE_LINK);
  });

  test('Navigate to Time Off page and verify employee table shows no data', async ({ page }) => {
    await test.step('Click Manage then click Time Off', async () => {
      await timeOffPage.navigateToTimeOff();
      await expect(page).toHaveURL(ENV.TIME_OFF_URL, { timeout: 10000 });
    });

    await test.step('Verify employee table is displayed with no data', async () => {
      await expect(timeOffPage.timeOffTable).toBeVisible();
      await expect(timeOffPage.noDataMessage).toBeVisible();
      expect(await timeOffPage.noDataMessage.textContent()).toBe('No data');
    });
  });
});
