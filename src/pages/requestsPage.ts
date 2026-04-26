import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class RequestsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Navigation

  get requestsMenuItem(): Locator {
    return this.page.locator('.ant-menu-item').filter({ hasText: 'Requests' });
  }

  // Page elements

  get noDataMessage(): Locator {
    return this.page.locator('.ant-empty-description');
  }

  // Actions

  async navigateToRequests(): Promise<void> {
    await this.openManageMenu();
    await this.requestsMenuItem.click();
  }
}
