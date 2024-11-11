/** Generated from: tests\features\bbc-sport.feature */
import { test } from "playwright-bdd";

test.describe("Search functionality for relevant results when searching for 'sport in 2023'", () => {

  test("Searching for 'sport in 2023' returns at least 4 relevant results", async ({ Given, page, When, Then }) => {
    await Given("the BBC Sport search feature is available on the website", null, { page });
    await When("I search for \"sport in 2023\" using the search bar on the homepage or any other page on the site,", null, { page });
    await Then("the search results should display at least 4 results related to sports events, articles, and news from 2023", null, { page });
  });

  test("Validate an a table of results", async ({ Given, page, When, Then }) => {
    await Given("the BBC Sport search feature is available on the website", null, { page });
    await When("I navigate to the formula1 table of results for \"2023\" with race name \"Las Vegas Grand Prix\"", null, { page });
    await Then("the table should show first place \"Max Verstappen\", second place \"George Russell\" and third place \"Sergio Perez\"", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\features\\bbc-sport.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Searching for 'sport in 2023' returns at least 4 relevant results": {"pickleLocation":"11:1"},
  "Validate an a table of results": {"pickleLocation":"22:1"},
};