/**
 * Definition of automated test to perform a search in https://duckduckgo.com/.
 *
 * @author diegomera84
 * @date   2022-11-23
 *
 * @description
 *
 * Feature: Validate the result of Michael Jordan search
 * Given a browser with the page https://duckduckgo.com/
 * When the user execute a search of 'Michael Jordan'
 * Then The result should contains an image
 * And The result should includes an wikipedia page
 * And The result should includes an NBA page
 */

const { test, 'test': { describe, beforeAll, afterAll }, expect } = require('@playwright/test');

test('the search result should contain all the expected items', async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    await page.getByRole('textbox').fill('Michael Jordan');
    await page.locator('input.search__button.js-search-button').click();

    const image = await page.getByRole('img')

    await expect(image, 'The result should contains an image').toBeVisible();

    const wikiPage = await page.locator('span >> text=Michael Jordan - Wikipedia')

    await expect(wikiPage, 'The result should includes an wikipedia page').toBeVisible();

    const nbaPage = await page.locator('span >> text=nba.com')

    await expect(nbaPage, 'The result should includes an NBA page').toBeVisible();
});