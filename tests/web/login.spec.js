import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Login Functionality', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('should display login form', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Login');
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    await loginPage.login('user@example.com', 'password123');
    
    const dashboardPage = new DashboardPage(page);
    const welcomeMessage = await dashboardPage.getWelcomeMessage();
    expect(welcomeMessage).toContain('Welcome');
  });

  test('should show error message with invalid credentials', async ({ page }) => {
    await loginPage.login('invalid@email.com', 'wrongpass');
    
    const isErrorVisible = await loginPage.isErrorDisplayed();
    expect(isErrorVisible).toBeTruthy();
  });

  test('should require email field', async ({ page }) => {
    await loginPage.fill(loginPage.passwordInput, 'password123');
    await loginPage.click(loginPage.loginButton);
    
    const isErrorVisible = await loginPage.isErrorDisplayed();
    expect(isErrorVisible).toBeTruthy();
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    const emailInput = page.locator(loginPage.emailInput);
    await expect(emailInput).toHaveAttribute('required');
  });
});

test.describe('Logout Functionality', () => {
  test('should logout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('user@example.com', 'password123');

    const dashboardPage = new DashboardPage(page);
    await dashboardPage.logout();
    
    // Should redirect to login page
    expect(page.url()).toContain('/login');
  });
});
