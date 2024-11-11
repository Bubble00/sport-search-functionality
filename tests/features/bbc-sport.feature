Feature: Testing search functionality for relevant results when searching for 'sport in 2023'

As an editor,  
I want the search functionality to return at least 4 relevant results whenever someone searches for 'sport in 2023',  
So that users can find accurate and relevant content related to 'sport in 2023'.

As a BBC editor
I want to report on the top 3 finishers of the 2023 Las Vegas Grand Prix
So that readers get a clear and accurate summary of the race results

Scenario: Verify search results return at least 4 relevant articles for 'sport in 2023'
Given the BBC Sport search feature is available on the website
When I search for "sport in 2023" using the search bar on the homepage or any other page on the site,
Then the search results should display at least 4 results related to sports events, articles, and news from 2023

Scenario: Verify top 3 finishers of the 2023 Las Vegas Grand Prix
Given the BBC Sport search feature is available on the website
When  I navigate to the formula1 table of results for "2023" with race name "Las Vegas Grand Prix"
Then the table should show first place "<Number_1>", second place "<Number_2>" and third place "<Number_3>"
Examples:
| Number_1       | Number_2       | Number_3    |
| Max Verstappen | George Russell | Sergio Perez|