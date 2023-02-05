import axios from "axios";
import { BaseURL } from "../Config";
import { getToken } from "./Tokens";
// import { environment } from "src/config";
// export const BASE_URL: string = environment.apiKey;

// Get request Function
export const apiGetRequest = (endpoint, props = {}, token = null) =>
  ApiRequest("GET", endpoint, token, props);

// Post request Function
export const apiPostRequest = (endpoint, payload, token = null) =>
  ApiRequest("POST", endpoint, token, { data: payload });

// Patch request Function
export const apiPatchRequest = (endpoint, payload, token = null) =>
  ApiRequest("PATCH", endpoint, token, { data: payload });

// Put Request Function
export const apiPutRequest = (endpoint, payload, token = null) =>
  ApiRequest("PUT", endpoint, token, { data: payload });

// Delete Request Function
export const apiDeleteRequest = (endpoint, props = {}, token = null) =>
  ApiRequest("DELETE", endpoint, token, props);

// Api Request for all the api methods
export const ApiRequest = (
  method,
  endpoint,
  token = null,
  props = {}
) => {
  if (!token) {
    token = getToken()
  }
  const params = {
    method,
    baseURL: `${BaseURL}/rest/api/`,
    url: endpoint,
    params:
      method.toLowerCase() === "get" || method.toLowerCase() === "delete"
        ? props
        : undefined,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  Object.assign(params, props);
  if (token) {
    params.headers.Authorization = `Bearer ${token}`;
  }
  return axios(params);
}
