import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  // Locators
  get emailInput() {
    return 'input[name="email"]';
  }

  get passwordInput() {
    return 'input[name="password"]';
  }

  get loginButton() {
    return 'button[type="submit"]';
  }

  get errorMessage() {
    return '[data-testid="error-message"]';
  }

  get successMessage() {
    return '[data-testid="success-message"]';
  }

  // Actions
  async goto() {
    await super.goto('/login');
  }

  async login(email, password) {
    await this.fill(this.emailInput, email);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async getErrorMessage() {
    return await this.getText(this.errorMessage);
  }

  async getSuccessMessage() {
    return await this.getText(this.successMessage);
  }

  async isErrorDisplayed() {
    return await this.isVisible(this.errorMessage);
  }
}
