import type { AppDispatch } from "../reduxtkt/store";
import { setQuantity } from "../reduxtkt/quantity/quantitySlice";

import axios from "axios";
import data from "../data/apiKey.json";

const API_KEY: string = data.key;
const BASE_URL: string = "https://newsapi.org/v2/top-headlines";
type Dummy = {
  [key: string]: Article[];
};

export async function getCountryNews(
  country_code: string,
  dispatch: AppDispatch
) {
  const parameters = {
    apiKey: API_KEY,
    country: country_code,
  };

  sleep(1000);

  try {
    const news = await axios.get(BASE_URL, { params: parameters });
    dispatch(setQuantity(news.data.totalResults));
    return news.data.articles;
  } catch (error) {
    console.log(error);
    const dummyData: Dummy = require("../data/dummyData.json");
    if (dummyData.hasOwnProperty(country_code)) {
      dispatch(setQuantity(20));
      return dummyData[country_code];
    }
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
