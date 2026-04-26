import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class PayrollPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Navigation

  get payrollMenuItem(): Locator {
    return this.page.locator('.ant-menu-item').filter({ hasText: 'Payroll' });
  }

  // Page elements

  get addPayrollCycleButton(): Locator {
    return this.page.getByRole('button', { name: 'Add payroll cycle' });
  }

  get generalHeading(): Locator {
    return this.page.locator('h2').filter({ hasText: 'General' }).first();
  }

  // Actions

  async navigateToPayroll(): Promise<void> {
    await this.openManageMenu();
    await this.payrollMenuItem.click();
  }

  async clickAddPayrollCycle(): Promise<void> {
    await this.addPayrollCycleButton.click();
  }
}
