/**
 * Definition of automated test to change the theme in https://duckduckgo.com/.
 *
 * @author diegomera84
 * @date   2022-11-23
 *
 * @description
 *
 * Feature: Validate the theme change in https://duckduckgo.com/
 * Given a browser with the page https://duckduckgo.com/ 
 * When the user change the theme to Terminal
 * Then the background color must change
 */

 const { test, 'test': { describe, beforeAll, afterAll }, expect } = require('@playwright/test');

 test('the background color should change if the user change the theme', async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    const locator = await page.locator('#pg-index');
    const initialColor = await locator.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-color');
    });
    await page.locator('a.header__button--menu').click();
    await page.locator('li.nav-menu__item.clear').click();
    await page.getByText('Terminal').click();
    await page.locator('a.btn.btn--primary.js-set-exit').click();
    await page.goto('https://duckduckgo.com/');

    const terminalColor = await locator.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-color');
    });

    await expect(terminalColor,'the background color should change').not.toBe(initialColor);
 });