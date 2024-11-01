import { defineConfig, devices } from '@playwright/test';
import packageJaon from './package.json';

// Extract the playwright version from package json
const playwrightVersion  = () : string => packageJaon.dependencies['playwright'].replace('^','');
console.log("Playwright version:"+ playwrightVersion());

// Set Moon Host here
const moonHost = 'moon.dataout.in.example.com';

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below.*/
  use: {
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        connectOptions: {
          wsEndpoint: `wss://${moonHost}/playwright/chromium/playwright-${playwrightVersion()}?headless=false&arg=--ignore-certificate-errors`,
        },
      },
    }
  ],
});
