# QA Automation Framework

Professional QA automation framework using **Playwright** with **JavaScript** for comprehensive testing of web applications and APIs.

[![QA Automation Tests](https://github.com/aqibmurshidi/qa-automation-showcase/actions/workflows/qa-tests.yml/badge.svg)](https://github.com/aqibmurshidi/qa-automation-showcase/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node-%3E%3D%2016.0.0-brightgreen)](https://nodejs.org/)
[![Playwright](https://img.shields.io/badge/Playwright-Latest-blueviolet)](https://playwright.dev/)

## Features

✨ **Modern Stack**
- Playwright for reliable, fast automation
- JavaScript/ES6+ support
- Cross-browser testing (Chromium, Firefox, WebKit)

🎯 **Professional Testing Approach**
- Page Object Model (POM) design pattern
- Comprehensive test coverage (UI & API)
- Detailed test reporting & screenshots
- Accessibility testing support

🚀 **CI/CD Integration**
- GitHub Actions automation
- Multi-Node version testing
- Automatic test reports
- PR comments with test summaries

📊 **Quality Metrics**
- HTML test reports
- JSON test results
- JUnit XML reports
- Video/Screenshot on failure

## Project Structure

```
qa-automation-showcase/
├── tests/
│   ├── pages/                    # Page Object Model classes
│   │   ├── BasePage.js          # Base page with common methods
│   │   ├── LoginPage.js         # Login page object
│   │   └── DashboardPage.js     # Dashboard page object
│   ├── web/                      # UI test suites
│   │   └── login.spec.js        # Login functionality tests
│   └── api/                      # API test suites
│       └── posts.spec.js        # REST API tests
├── .github/
│   └── workflows/
│       └── qa-tests.yml         # GitHub Actions CI/CD
├── playwright.config.js          # Playwright configuration
├── package.json                  # Dependencies & scripts
└── README.md                     # This file
```

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/aqibmurshidi/qa-automation-showcase.git
cd qa-automation-showcase
```

2. Install dependencies
```bash
npm install
```

3. Install Playwright browsers
```bash
npx playwright install
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run specific test suites
```bash
# API tests only
npm run test:api

# Web/UI tests only
npm run test:web
```

### Run tests with UI mode (interactive)
```bash
npm run test:ui
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### Debug tests
```bash
npm run test:debug
```

### Generate & view HTML report
```bash
npm run test
npm run report
```

## Test Scenarios

### UI Tests (Web Folder)
- ✅ Login form display
- ✅ Successful login with valid credentials
- ✅ Error handling for invalid credentials
- ✅ Form validation (required fields)
- ✅ Accessibility attributes
- ✅ Logout functionality

### API Tests (API Folder)
- ✅ GET all posts
- ✅ GET single post by ID
- ✅ 404 error handling
- ✅ POST new post (create)
- ✅ PUT post (update)
- ✅ DELETE post
- ✅ Query parameter handling
- ✅ Response header validation

## Configuration

Edit `playwright.config.js` to customize:
- Base URL for testing
- Timeout settings
- Screenshots/Video capture
- Retry logic
- Reporting formats

## GitHub Actions CI/CD

The project includes automated testing on:
- **Push to main/develop branches**
- **Pull requests**
- **Weekly scheduled runs**

Test results are automatically:
- Uploaded as artifacts
- Reported in PR comments
- Published to Actions tab

## Code Style

The project uses:
- **ESLint** for code linting
- **Prettier** for code formatting

```bash
# Lint code
npm run lint

# Format code
npm run format
```

## Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| @playwright/test | ^1.48.0 | Testing framework |
| eslint | ^9.15.0 | Code linting |
| prettier | ^3.4.0 | Code formatting |

## Best Practices Implemented

✅ **Page Object Model** - Maintainable, scalable test structure
✅ **DRY Principle** - BasePage class eliminates duplication
✅ **Clear Naming** - Descriptive test names and locators
✅ **Error Handling** - Proper assertions and wait strategies
✅ **Parallel Execution** - Tests run in parallel for speed
✅ **Failure Artifacts** - Screenshots/videos on failure
✅ **CI/CD Pipeline** - Automated testing on code changes

## Sample Test File Structure

```javascript
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Functionality', () => {
  test('should login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('user@example.com', 'password123');
    
    const welcomeMessage = await loginPage.getText('[data-testid="welcome"]');
    expect(welcomeMessage).toContain('Welcome');
  });
});
```

## Customization

### Adding New Tests
1. Create a new `.spec.js` file in `tests/web/` or `tests/api/`
2. Import required page objects or Playwright utilities
3. Write test cases following the existing pattern
4. Run tests: `npm test`

### Creating New Page Objects
1. Create a new file in `tests/pages/` extending `BasePage`
2. Define locators as getters
3. Create action methods for user interactions
4. Import and use in test files

### Modifying Workflows
Edit `.github/workflows/qa-tests.yml` to:
- Change trigger events
- Add notification channels
- Customize report generation
- Add additional test steps

## Troubleshooting

**Tests fail locally but pass in CI?**
- Run `npm install` to ensure fresh dependencies
- Check `playwright.config.js` baseURL setting
- Use `--headed` flag to see what's happening

**Timeouts occurring?**
- Increase timeout in `playwright.config.js`
- Check if elements have proper wait conditions
- Verify application is running if needed

**Report not generating?**
- Clear test-results folder: `rm -rf test-results/`
- Re-run tests: `npm test`
- View report: `npm run report`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-test`)
3. Commit changes (`git commit -m 'Add amazing test'`)
4. Push to branch (`git push origin feature/amazing-test`)
5. Open a Pull Request

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Testing Best Practices](https://playwright.dev/docs/best-practices)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

**Aqib Murshidi** - [GitHub Profile](https://github.com/aqibmurshidi)

## Support

For issues and questions:
- Open an [Issue](https://github.com/aqibmurshidi/qa-automation-showcase/issues)
- Create a [Discussion](https://github.com/aqibmurshidi/qa-automation-showcase/discussions)

---

⭐ If you find this helpful, please consider starring the repository!
