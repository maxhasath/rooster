import { test, expect } from '@playwright/test';
import ENV from '../utils/env';
import { PeoplePage } from '../pages/peoplePage';

test.describe.serial('People tests', () => {
  let peoplePage: PeoplePage;

  test.beforeEach(async ({ page }) => {
    peoplePage = new PeoplePage(page);
    await page.goto(ENV.HOME_PAGE_LINK);
  });

  test('Successful search with valid criteria', async ({ page }) => {
    let searchName: string;

    await test.step('Navigate to People page', async () => {
      await peoplePage.navigateToPeople();
      await expect(page).toHaveURL(ENV.PEOPLE_URL, { timeout: 10000 });
    });

    await test.step('Read logged-in user name from the UI', async () => {
      searchName = (await peoplePage.loggedInUserName.textContent()).trim();
    });

    await test.step('Search using the logged-in user name', async () => {
      await peoplePage.search(searchName);
    });

    await test.step('Verify search result matches the searched name', async () => {
      await expect(peoplePage.searchResult(searchName)).toBeVisible({ timeout: 10000 });
    });
  });

  test('Unsuccessful search with invalid criteria', async ({ page }) => {
    await test.step('Navigate to People page', async () => {
      await peoplePage.navigateToPeople();
      await expect(page).toHaveURL(ENV.PEOPLE_URL, { timeout: 10000 });
    });

    await test.step('Search using invalid criteria', async () => {
      await peoplePage.search(ENV.INVALID_SEARCH_TERM);
    });

    await test.step('Verify no results message is displayed', async () => {
      await expect(peoplePage.noDataMessage).toBeVisible({ timeout: 10000 });
      expect(await peoplePage.noDataMessage.textContent()).toBe(ENV.NO_EMPLOYEES_MESSAGE);
    });
  });
});
