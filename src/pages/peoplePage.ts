import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class PeoplePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Navigation

  get peopleMenuItem(): Locator {
    return this.page.locator('.ant-menu-item').filter({ hasText: 'People' });
  }

  // Page elements

  get loggedInUserName(): Locator {
    return this.page.locator('span.ant-typography').first();
  }

  get searchInput(): Locator {
    return this.page.locator('input.ant-input[placeholder="Search"]');
  }

  get noDataMessage(): Locator {
    return this.page.locator('.ant-empty-footer').getByText('No reporting employees');
  }

  searchResult(name: string): Locator {
    return this.page.getByRole('link', { name, exact: true });
  }

  // Actions

  async navigateToPeople(): Promise<void> {
    await this.openManageMenu();
    await this.peopleMenuItem.click();
  }

  async search(term: string): Promise<void> {
    await this.searchInput.fill(term);
  }
}
