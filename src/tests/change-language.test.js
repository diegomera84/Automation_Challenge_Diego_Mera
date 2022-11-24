/**
 * Definition of automated test to change the language in https://duckduckgo.com/.
 *
 * @author diegomera84
 * @date   2022-11-23
 *
 * @description
 *
 * Feature: Validate the language change in https://duckduckgo.com/
 * Given a browser with the page https://duckduckgo.com/ 
 * When the user change the language to Lingvo
 * Then the language must change
 */

 const { test, 'test': { describe, beforeAll, afterAll }, expect } = require('@playwright/test');

 test('the page language should change if the user change the language', async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    await page.locator('a.header__button--menu').click();
    const menuOptions = await page.$$('li.nav-menu__item');
    await menuOptions[1].click();
    await page.locator('#setting_kad').selectOption('eo_XX');
    await page.locator('a.btn.btn--primary.js-set-exit').click();
    await page.goto('https://duckduckgo.com/');

    const language = await page.locator('li.nav-menu__item.clear').innerText();

    await expect(language,'the language should change').toBe('Etosoj');
 });