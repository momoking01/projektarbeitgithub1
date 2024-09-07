import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:4321/projektarbeitgithub1/');
  await expect(page).toHaveTitle(/Restaurante/);  
});

test('navigation to menu', async ({ page }) => {
  await page.goto('http://localhost:4321/projektarbeitgithub1/');
  await page.click('text=Menu');
  await expect(page).toHaveURL('http://localhost:4321/projektarbeitgithub1/menu'); 

  //await expect(page.locator('h1')).toContainText('Menu');
});
test('homepage has correct heading', async ({ page }) => {
  await page.goto('http://localhost:4321/projektarbeitgithub1/');
  const heading = page.locator('text=Welcome to our Syrian Restaurant');
  await expect(heading).toBeVisible();
});
// Test 3: Navigation zur Menüseite und Prüfung des Inhalts
test('navigation to menu and check content', async ({ page }) => {
  // Gehe zur Startseite
  await page.goto('http://localhost:4321/projektarbeitgithub1/');
  
  // Klicke auf den 'Menu'-Link im Navigationsmenü
  await page.click('a:has-text("Menu")');
  
  // Überprüfe, dass die URL auf die Menüseite weiterleitet
  await expect(page).toHaveURL('http://localhost:4321/projektarbeitgithub1/menu');
  
  // Warte, bis der "Menu"-Titel sichtbar ist
  const menuHeading = page.locator('h1:has-text("Menu")'); // Falls "Menu" eine Überschrift ist
  await menuHeading.waitFor({ state: 'visible' });
  await expect(menuHeading).toBeVisible();

  // Überprüfe, dass der Pizzas-Bereich sichtbar ist
  const pizzasSection = page.locator('text=Pizzas');
  await expect(pizzasSection).toBeVisible();
});
// Test 5: Verify Navigation to the Contact Page
test('navigation to contact page and check contact info', async ({ page }) => {
  await page.goto('http://localhost:4321/projektarbeitgithub1/');
  await page.click('text=Contact');
  await expect(page).toHaveURL('http://localhost:4321/projektarbeitgithub1/contact');

  // Check contact details for Reem, Qusai, and Mohamad
  const contactReem = page.locator('text=Contact Reem');
  await expect(contactReem).toBeVisible();

  const contactQusai = page.locator('text=Contact Qusai');
  await expect(contactQusai).toBeVisible();

  const contactMohamad = page.locator('text=Contact Mohamad');
  await expect(contactMohamad).toBeVisible();
});
