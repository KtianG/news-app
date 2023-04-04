import type { AppDispatch } from "../reduxtkt/store";
import { setQuantity } from "../reduxtkt/quantity/quantitySlice";

import axios from "axios";
import data from "../data/apiKey.json";

//function returning array of news from api, local storage, or json file with dummy data
export async function getCountryNews(
  country_code: string,
  dispatch: AppDispatch
) {
  let articles_array: Article[];
  const country_storage: string | null = localStorage.getItem(country_code);

  if (country_storage != null) {
    articles_array = JSON.parse(country_storage);
  } else {
    try {
      articles_array = await fetchNews(country_code);
    } catch (error) {
      //in case api fails provide dummy data
      console.log("There were too many requests - providing dummy data");
      articles_array = getDummyNews(country_code);
    }
  }

  localStorage.setItem(country_code, JSON.stringify(articles_array));
  dispatch(setQuantity(articles_array.length));

  return articles_array;
}

// Function fetching news from api
async function fetchNews(country_code: string) {
  const API_KEY: string = data.key;
  const BASE_URL: string = "https://gnews.io/api/v4/top-headlines";
  const parameters: { apikey: string; lang: string; country: string } = {
    apikey: API_KEY,
    lang: "en",
    country: country_code,
  };
  const news = await axios.get(BASE_URL, { params: parameters });
  const articles_array: Article[] = news.data.articles;
  return articles_array;
}

//Function providing dummy news when api throws error ( mostly when api calls limit has been excceeded)
function getDummyNews(country_code: string): Article[] {
  const dummyData: Dummy = require("../data/dummyData.json");
  const articles_array: Article[] = dummyData[country_code];
  return articles_array;
}

type Dummy = {
  [key: string]: Article[];
};
