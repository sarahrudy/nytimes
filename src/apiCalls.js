export const getData = (category) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=oElLadX78g1ROpCXcF5DRym7bsJAlQoM`)
    .then(response => response.json())
    .then(data => console.log(data.results))
}