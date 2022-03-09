import http from "./httpService";
import apiUrl from "../config.json";

const apiEndpoint = apiUrl + "/tiles";

export function getTiles() {
  return http.get(apiEndpoint);
}

function tileUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getTile(tileId) {
  return http.get(tileUrl(tileId));
}

export function saveTile(tile) {
  return http.post(tile);
}
