import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:4321/projektarbeitgithub1/');
  await expect(page).toHaveTitle(/Falscher Titel/);  
});

test('navigation to menu', async ({ page }) => {
  await page.goto('http://localhost:4321/projektarbeitgithub1/');
  await page.click('text=Menu');
  await expect(page).toHaveURL('http://localhost:4321/projektarbeitgithub1/falsche-url'); 
  await expect(page.locator('h1')).toContainText('Menu');
});
