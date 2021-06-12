import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseURL } from "../../api";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseURL(),
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const state = getState().req.headers;
      headers.set("cookie", state.cookie);
      return headers;
    },
  }),
  tagTypes: ["resource"],
  endpoints: (build) => ({
    getResource: build.query({
      query: (page = 1, perPage = 20, sortOrder = "desc", sortBy = "likes") =>
        `resource?sortBy=${sortBy}:${sortOrder}&page=${page}&limit=${perPage}`,
    }),
    // get resources liked by the current user
    getResourceByUserLikes: build.query({
      query: (page = 1, perPage = 20, sortOrder = "desc", sortBy = "likes") =>
        `resource/user?sortBy=${sortBy}:${sortOrder}&page=${page}&limit=${perPage}`,
    }),
    getResourceByTrending: build.query({
      query: (page = 1, perPage = 20, sortOrder = "desc", sortBy = "likes") =>
        `resource/trending?sortBy=${sortBy}:${sortOrder}&page=${page}&limit=${perPage}`,
    }),
  }),
});

export const {
  useGetResourceQuery,
  useGetResourceByUserLikesQuery,
  useGetResourceByTrendingQuery,
} = api;
