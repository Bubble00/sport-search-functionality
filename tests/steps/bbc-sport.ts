import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";

const { Given, When, Then } = createBdd();
const url = "https://www.bbc.com/sport"

Given('the BBC Sport search feature is available on the website', async ({ page }) => {
    await page.goto(url);
    await expect(page).toHaveTitle(/BBC Sport/);
});

When('I search for {string} using the search bar on the homepage or any other page on the site,', async ({ page }, searchInput) => {

    await page.getByText('Search BBC').click();
    const searchbar = page.getByPlaceholder('Search the BBC');
    await searchbar.fill(searchInput);
    await searchbar.press('Enter');
});

Then('the search results should display at least {int} results related to sports events, articles, and news from {int}', async ({ page }, arg, arg1) => {

    // Get all the search result elements (assumes each result is contained within a item)
    const resultItems = await page.locator("//*[(@role='list') and (@spacing='responsive')]/li").all();

    // Assert that there are at least 4 results
    await expect(resultItems.length).toBeGreaterThanOrEqual(4);

    // Check if each result contains the relevant keywords: "2023" and "sport"
    for (const result of resultItems) {
        var textContent = await result.textContent();

        if (!textContent!.includes("live")) {
            await expect(result).toContainText("2023");
            await expect(result).toContainText(/sport/mi);
        }
    }
});

When('I navigate to the formula1 table of results for {string} with race name {string}', async ({ page }, year_of_race: string, race_name: string) => {
    await page.getByRole('link', { name: 'Formula 1' }).click();
    await page.getByRole('link', { name: 'Results' }).click();
    await page.getByRole('link', { name: year_of_race }).click();
    await page.getByRole('button', { name: /Las Vegas Grand Prix/ }).click();

});

Then('the table should show first place {string}, second place {string} and third place {string}', async ({ page }, first_place: string, second_place: string, third_place: string) => {
    const tableLocator = page.locator("xpath=(//*[@id='main-data']//section)")
        .filter({ has: page.getByRole('button', { name: /Las Vegas Grand Prix/ }) });

    // Locate the rows within the table body
    const rows = tableLocator.locator('tbody tr');

    // Get the number of rows
    const rowCount = await rows.count();
    //console.log(await rows.count());

    let winners: string[] = [];
    winners.push(first_place);
    winners.push(second_place);
    winners.push(third_place);

    // Loop through each row and extract the required data
    for (let i = 0; i < winners.length; i++) {
        // Extract data for each row
        const rank = await rows.nth(i).locator('td:nth-child(1)').textContent();
        const driver = await rows.nth(i).locator('td:nth-child(2)').textContent();

        // Optional: Perform assertions to verify the data is extracted correctly
        expect(rank).toBeDefined();
        expect(driver).toBeDefined();

        expect(driver).toContain(winners[i]);

    }

});
