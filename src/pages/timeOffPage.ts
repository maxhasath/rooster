import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class TimeOffPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Navigation

  get manageMenu(): Locator {
    return this.page.locator('.main-menu-item.manage .ant-menu-submenu-title');
  }

  get timeOffMenuItem(): Locator {
    return this.page.locator('.ant-menu-item').filter({ hasText: 'Time-off' });
  }

  // Page elements

  get timeOffTable(): Locator {
    return this.page.locator('.ant-table');
  }

  get noDataMessage(): Locator {
    return this.page.locator('.ant-empty-description');
  }

  // Actions

  async navigateToTimeOff(): Promise<void> {
    await this.manageMenu.click();
    await this.timeOffMenuItem.click();
  }
}
