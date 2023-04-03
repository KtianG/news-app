import type { AppDispatch } from "../reduxtkt/store";
import { setQuantity } from "../reduxtkt/quantity/quantitySlice";

import axios from "axios";
import data from "../data/apiKey.json";

const API_KEY: string = data.key;
const BASE_URL: string = "https://gnews.io/api/v4/top-headlines";
type Dummy = {
  [key: string]: Article[];
};

export async function getCountryNews(
  country_code: string,
  dispatch: AppDispatch
) {
  const parameters = {
    apikey: API_KEY,
    country: country_code,
  };

  const country_storage: string | null = localStorage.getItem(country_code);

  if (country_storage != null) {
    const data: Article[] = JSON.parse(country_storage);
    dispatch(setQuantity(data.length));
    return data;
  }

  try {
    const news = await axios.get(BASE_URL, { params: parameters });
    const data = news.data.articles;

    dispatch(setQuantity(data.length));
    localStorage.setItem(country_code, JSON.stringify(data));

    return data;
  } catch (error) {
    //in case api fails provide dummy data
    console.log("There was too many requests - providing dummy data");
    const dummyData: Dummy = require("../data/dummyData.json");
    const data: Article[] = dummyData[country_code];
    dispatch(setQuantity(data.length));
    localStorage.setItem(country_code, JSON.stringify(data));
    return data;
  }
}
