import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class OnboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Navigation

  get onboardMenuItem(): Locator {
    return this.page.locator('.ant-menu-item').filter({ hasText: 'Onboard' });
  }

  // Page elements

  get onboardNewEmployeeButton(): Locator {
    return this.page.getByRole('button', { name: 'Onboard new employee' });
  }

  get basicsHeading(): Locator {
    return this.page.locator('h2').filter({ hasText: 'Basics' }).first();
  }

  // Actions

  async navigateToOnboard(): Promise<void> {
    await this.openManageMenu();
    await this.onboardMenuItem.click();
  }

  async clickOnboardNewEmployee(): Promise<void> {
    await this.onboardNewEmployeeButton.click();
  }
}
