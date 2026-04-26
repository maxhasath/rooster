import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class ProfilePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Header dropdown

  get profileDropdownTrigger(): Locator {
    return this.page.locator('a.ant-dropdown-trigger.profile-dropdown').first();
  }

  get accountMenuItem(): Locator {
    return this.page.locator('.ant-dropdown-menu-item').filter({ hasText: 'Account' });
  }

  get signOutMenuItem(): Locator {
    return this.page.locator('.ant-dropdown-menu-item').filter({ hasText: 'Sign out' });
  }

  get avatarInitial(): Locator {
    return this.page.locator('.ant-avatar-string').first();
  }

  // Profile edit form

  get editButton(): Locator {
    return this.page.locator('button.btn-edit').first();
  }

  get firstNameInput(): Locator {
    return this.page.locator('input[name="firstName"]');
  }

  get lastNameInput(): Locator {
    return this.page.locator('input[name="lastName"]');
  }

  get updateButton(): Locator {
    return this.page.getByRole('button', { name: 'Update' });
  }

  get fieldError(): Locator {
    return this.page.locator('.ant-form-item-explain-error');
  }

  get successToast(): Locator {
    return this.page.locator('.toast-card-message');
  }

  // Actions

  async openProfileDropdown(): Promise<void> {
    await this.profileDropdownTrigger.click();
  }

  async navigateToAccount(): Promise<void> {
    await this.openProfileDropdown();
    await this.accountMenuItem.click();
  }

  async signOut(): Promise<void> {
    await this.openProfileDropdown();
    await this.signOutMenuItem.click();
  }

  async clickEdit(): Promise<void> {
    await this.editButton.click();
  }

  async updateName(firstName: string, lastName: string): Promise<void> {
    await this.firstNameInput.clear();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.clear();
    await this.lastNameInput.fill(lastName);
    await this.updateButton.click();
  }
}
