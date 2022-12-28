import axios from "axios";
// import { getToken, getLanguage } from "./Tokens";
// import { environment } from "src/config";
// export const BASE_URL: string = environment.apiKey;

// Get request Function
export const apiGetRequest = (endpoint, token = null, props = {}) =>
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
export const apiDeleteRequest = (endpoint, token = null, props = {}) =>
  ApiRequest("DELETE", endpoint, token, props);

// Api Request for all the api methods
export const ApiRequest = (
  method,
  endpoint,
  token = null,
  props = {}
) => {
  if (!token) {
    token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ0NUdUMVZqdXBRdzlZMXV4UDZELXVCUGQ4WnZOeDVveUI4MHJJUkZNc00wIn0.eyJleHAiOjE2NzIxOTYzNzQsImlhdCI6MTY3MjE2MDM3NCwianRpIjoiYzc0OTIyZTQtYzgxNS00Yzc2LTg3OWQtOGI4OTA1M2ViZjU5IiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLmtleWNsb2FrLnN2Yy5jbHVzdGVyLmxvY2FsOjgwODAvYXV0aC9yZWFsbXMvUHJvZmxvdyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI3ZTI1Zjk1NC0xM2I2LTRjYTctODcxNi03OTNkNzIyZmMxN2QiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwcm9mbG93LmF0Iiwic2Vzc2lvbl9zdGF0ZSI6ImY1MGViZjQyLWRiYzktNGFkMy1hOWU5LTI1MGRjOWU3MDg2MCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly93d3cucHJvZmxvdy5hdCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1wcm9mbG93Iiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsInVzZXIiXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiJmNTBlYmY0Mi1kYmM5LTRhZDMtYTllOS0yNTBkYzllNzA4NjAiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInVzZXJfaWQiOiJtdWhhbW1hZC5haXphekBwcm9mbG93LmF0IiwibmFtZSI6Im11aGFtbWFkLmFpemF6QHByb2Zsb3cuYXQgbXVoYW1tYWQuYWl6YXpAcHJvZmxvdy5hdCIsInByZWZlcnJlZF91c2VybmFtZSI6Im11aGFtbWFkLmFpemF6QHByb2Zsb3cuYXQiLCJnaXZlbl9uYW1lIjoibXVoYW1tYWQuYWl6YXpAcHJvZmxvdy5hdCIsImZhbWlseV9uYW1lIjoibXVoYW1tYWQuYWl6YXpAcHJvZmxvdy5hdCIsImVtYWlsIjoibXVoYW1tYWQuYWl6YXpAcHJvZmxvdy5hdCIsIm8iOlsiQ09NUEFOWTpQcm9mbG93IEdtYkgiLCJDT01QQU5ZSUQ6NjM3MzY0OTYxZjFmZGUwMDAxNzhlZTZmIiwiUE9MSUNZSUQ6NTQ2ZjQ4NTUtM2M3My00NzFiLTllMzYtYzRjMjc5ZWVkNTFjIl19.c_UiXDqFtKLsHG6PKN18Y7q7GX3XdikYlywDda87KNhzFIhzOH9TNItmDiqGX6I2nbn2RKCwaz1PJ9Spd5tptXEbgKi4umnvMRoWL-TaJ6rmOFDLuQNBByzoWkeSam68pE50y5J7V-WlTUQ2c6T-dlIabXSwL-dLxoJlKBiS6rP1VwgIUOaYI5xNlKfGEXaUSkYHC07b_HX1LwTZui0Ac9yAXzfFb-vcr99bnYHlwK2y0b9kUhrpvytFuWvkSzZhiVm4ksBVQm16hN5PCpqxspljgH8wFJmTVjTzchtUtqQTmNnchc1uWjwewlcflXS3x4nN7Ka29S-rn-2AMrmbMg"
  }
  const params = {
    method,
    baseURL: "https://proflow.at/rest/api/",
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
