import { test, expect } from '@playwright/test';
import { environmentConfig } from '../environment.config';

test('Connect Application to Moon Instance and Run Playwright Test Example', async ({ page }) => {
  await page.goto(environmentConfig.baseUrl);
  
  //Verify Swag Labs Text at Top
  const headerText = await page.locator(".login_logo").getByText;
  expect(headerText).toBe('Swag Labs');
  
  console.log('Pausing for 10 seconds...');
  await new Promise(resolve => setTimeout(resolve, 10000)); // Pause for 10 seconds to see In Your Moon Instance.

  //Kill Page
  await page.close();
});
