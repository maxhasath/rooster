import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async pause(milliseconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  async openManageMenu(): Promise<void> {
    await this.page.locator('.main-menu-item.manage .ant-menu-submenu-title').first().click();
  }

  async clickButtonUntilInvisible(buttonLocator: Locator): Promise<void> {
    let isButtonVisible = true;

    while (isButtonVisible) {
      try {
        await buttonLocator.waitFor({ state: 'visible' });
        await buttonLocator.click();
      } catch {
        isButtonVisible = false;
      }
    }
  }
}
