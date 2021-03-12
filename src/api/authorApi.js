import { handleResponse, handleError } from "./apiUtils";
import * as envt from "../app.constant";

const baseUrl = envt.API_URL + "/authors/";

export function getAuthors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
