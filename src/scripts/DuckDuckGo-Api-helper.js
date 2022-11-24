/**
 * Definition of script to send requests to DuckDuckGo Instant Answer API.
 *
 * @author diegomera84
 * @date   2022-11-24
 */

 const request = require("request-promise");
 const baseUrl = "https://api.duckduckgo.com";
 const animalsTopic = 3;

 /**
 * Requests the search results.
 *
 * @param {string} keyWord The key word to search.
 *
 * @returns {JSON} The search result.
 *
 * @throws {Error} If any error.
 */
  const searchResults = keyWord => request({
    uri: `${baseUrl}/?q=${encodeURIComponent(keyWord)}&format=json`,
    headers: {
    },
    json: true,
});

searchResults("dogs")
.then(data => {
    let lines = data.RelatedTopics[animalsTopic].Topics.length
    console.log("Dogs images:")
    for (let line = 0; line < lines; line+=1){
        console.log(data.RelatedTopics[animalsTopic].Topics[line].Icon.URL);
    }
});

searchResults("dogecoin")
.then(data => {
    let lines = data.RelatedTopics.length
    console.log("URLs for dogecoin:");
    console.log(data.AbstractURL);
    for (let line = 0; line < lines; line+=1){
        console.log(data.RelatedTopics[line].FirstURL);
    }
    lines = data.Results.length
    for (let line = 0; line < lines; line+=1){
        console.log(data.Results[line].FirstURL);
    }
});