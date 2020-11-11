//const baseUrl = "https://tatoeba-scraper.herokuapp.com/";

const baseUrl = "http://192.168.18.4:8000/";

const api = {
  search: baseUrl + "search/",
  sentence: baseUrl + "sentence/",
  randomSentence: baseUrl + "random/",
  languages: baseUrl + "languages/",
}

export default api;
