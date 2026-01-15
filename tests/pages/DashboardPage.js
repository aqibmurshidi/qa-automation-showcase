import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  // Locators
  get welcomeMessage() {
    return '[data-testid="welcome-title"]';
  }

  get logoutButton() {
    return '[data-testid="logout-btn"]';
  }

  get userMenu() {
    return '[data-testid="user-menu"]';
  }

  get profileLink() {
    return '[data-testid="profile-link"]';
  }

  // Actions
  async goto() {
    await super.goto('/dashboard');
  }

  async getWelcomeMessage() {
    return await this.getText(this.welcomeMessage);
  }

  async logout() {
    await this.click(this.logoutButton);
  }

  async openUserMenu() {
    await this.click(this.userMenu);
  }

  async navigateToProfile() {
    await this.click(this.profileLink);
  }

  async isLogoutButtonVisible() {
    return await this.isVisible(this.logoutButton);
  }
}
