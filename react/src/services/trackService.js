import http from "./httpService";
import apiUrl from "../config.json";

const apiEndpoint = apiUrl + "/tracks";

export function getTracks() {
  return http.get(apiEndpoint);
}

function trackUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getTrack(trackId) {
  return http.get(trackUrl(trackId));
}
