import axios from "axios";

const BASE_URL = "https://api.watchmode.com/v1/";
const API_KEY = "unwb8JLwwmPPn4n85XoWSfONMETX2o6pUvNleq0L";

export interface AutocompleteResult {
  title: string;
  id: number;
}

export interface AutocompleteResponse {
  results: AutocompleteResult[];
}

export const autocompleteSearch = async (
  query: string
): Promise<AutocompleteResponse> => {
  try {
    const response = await axios.get<AutocompleteResponse>(
      `${BASE_URL}autocomplete-search/`,
      {
        params: {
          apiKey: API_KEY,
          search_value: query,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "There was an error fetching the autocomplete results:",
      error
    );
    throw error;
  }
};
