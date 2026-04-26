import { test, expect } from '@playwright/test';
import ENV from '../utils/env';
import { RequestsPage } from '../pages/requestsPage';

test.describe.serial('Requests tests', () => {
  let requestsPage: RequestsPage;

  test.beforeEach(async ({ page }) => {
    requestsPage = new RequestsPage(page);
    await page.goto(ENV.HOME_PAGE_LINK);
  });

  test('Navigate to Requests and verify no data', async ({ page }) => {
    await test.step('Click Manage then click Requests', async () => {
      await requestsPage.navigateToRequests();
      await expect(page).toHaveURL(ENV.REQUESTS_URL, { timeout: 10000 });
    });

    await test.step('Verify No data message is displayed', async () => {
      await expect(requestsPage.noDataMessage).toBeVisible({ timeout: 10000 });
      expect(await requestsPage.noDataMessage.textContent()).toBe(ENV.NO_DATA_MESSAGE);
    });
  });
});
