import { test, expect } from '@playwright/test';
import ENV from '../utils/env';
import { ProfilePage } from '../pages/profilePage';

test.describe.serial('Profile tests', () => {
  let profilePage: ProfilePage;

  test.beforeEach(async ({ page }) => {
    profilePage = new ProfilePage(page);
    await page.goto(ENV.HOME_PAGE_LINK);
  });

  test('Edit profile - validation error on empty name fields', async () => {
    await test.step('Navigate to Account and click Edit', async () => {
      await profilePage.navigateToAccount();
      await profilePage.clickEdit();
    });

    await test.step('Clear both name fields and click Update', async () => {
      await profilePage.firstNameInput.clear();
      await profilePage.lastNameInput.clear();
      await profilePage.updateButton.click();
    });

    await test.step('Verify Required error is shown for both fields', async () => {
      await expect(profilePage.fieldError.first()).toBeVisible({ timeout: 5000 });
      await expect(profilePage.fieldError.nth(1)).toBeVisible();
      expect(await profilePage.fieldError.first().textContent()).toBe(ENV.PROFILE_REQUIRED_ERROR);
      expect(await profilePage.fieldError.nth(1).textContent()).toBe(ENV.PROFILE_REQUIRED_ERROR);
    });
  });

  test('Edit profile - successfully update name', async () => {
    const newFirstName = 'AutoTest';
    const newLastName = 'User';
    let originalFirst: string;
    let originalLast: string;

    await test.step('Navigate to Account and click Edit', async () => {
      await profilePage.navigateToAccount();
      await profilePage.clickEdit();
      originalFirst = (await profilePage.firstNameInput.inputValue()).trim();
      originalLast = (await profilePage.lastNameInput.inputValue()).trim();
    });

    await test.step('Update name fields and submit', async () => {
      await profilePage.updateName(newFirstName, newLastName);
    });

    await test.step('Verify success toast is displayed', async () => {
      await expect(profilePage.successToast).toBeVisible({ timeout: 10000 });
      expect(await profilePage.successToast.textContent()).toBe(ENV.PROFILE_SUCCESS_MESSAGE);
    });

    await test.step('Verify updated name initial is reflected in the top right avatar', async () => {
      await expect(profilePage.avatarInitial).toHaveText(newFirstName[0]);
    });

    await test.step('Restore original name', async () => {
      await profilePage.clickEdit();
      await profilePage.updateName(originalFirst, originalLast);
    });
  });

});
