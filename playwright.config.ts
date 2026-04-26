import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
process.env.API_KEY =
  '0a7f9b43fdaafed689d567976aa3137b75ad2e8b8157a2402997d250e9b83841';

export default defineConfig({
  testDir: './src/tests',

  /* Run tests in files in parallel */
  fullyParallel: false,

  /*Set timeout Period for each test*/
  timeout: 1 * 60 * 1000,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /*  Give failing tests 1 retry attempt */
  //retries: 1,

  /* Retry on CI only */

  // retries: process.env.CI ? 2 : 1,

  /* Opt out of parallel tests on CI. */

  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { open: 'always' }], ['allure-playwright']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'on',
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
  },
  globalSetup: 'src/utils/globalSetup.ts',

  /* Configure projects for major browsers */
  projects: [
    { name: 'setup', testMatch: /.*\.setup\.ts/ },

    // {
    //   name: 'chromium',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     storageState: 'src/utils/authentication.json',
    //     viewport: { width: 1920, height: 1080 },

    //     launchOptions: {
    //       args: ['--window-size=1920,1080'],
    //     },
    //   },
    //   dependencies: ['setup'],
    // },

    // {
    //   name: 'chromium',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     storageState: 'src/utils/authentication.json',

    //     launchOptions: {
    //       args: ['--start-maximized'],
    //     },
    //   },
    //   dependencies: ['setup'],
    // },

    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //     viewport: { width: 1920, height: 1080 },
    //     launchOptions: {
    //       args: ['--start-fullscreen'],
    //     },
    //   },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     ...devices['Desktop Edge'],
    //     channel: 'msedge',
    //     viewport: { width: 1920, height: 1080 },
    //     launchOptions: {
    //       args: ['--window-size=1920,1080'],
    //     },
    //   },
    // },
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        viewport: { width: 1920, height: 1080 },
        storageState: 'src/utils/authentication.json',
        launchOptions: {
          args: ['--start-fullscreen'],
        },
      },
      dependencies: ['setup'],
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
