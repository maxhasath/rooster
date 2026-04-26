import { test, expect } from '@playwright/test';
import ENV from '../utils/env';
import { PayrollPage } from '../pages/payrollPage';

test.describe.serial('Payroll tests', () => {
  let payrollPage: PayrollPage;

  test.beforeEach(async ({ page }) => {
    payrollPage = new PayrollPage(page);
    await page.goto(ENV.HOME_PAGE_LINK);
  });

  test('Navigate to Add Payroll Cycle', async ({ page }) => {
    await test.step('Click Manage then click Payroll', async () => {
      await payrollPage.navigateToPayroll();
      await expect(page).toHaveURL(ENV.PAYROLL_URL, { timeout: 10000 });
    });

    await test.step('Click Add Payroll Cycle button', async () => {
      await payrollPage.clickAddPayrollCycle();
      await expect(page).toHaveURL(ENV.NEW_PAYROLL_CYCLE_URL, { timeout: 10000 });
    });

    await test.step('Verify General section is visible', async () => {
      await expect(payrollPage.generalHeading).toBeVisible({ timeout: 10000 });
    });
  });
});
