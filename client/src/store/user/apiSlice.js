import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ page, limit }) => `users?page=${page}&limit=${limit}`,
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
