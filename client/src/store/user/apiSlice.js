import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    // getUsers: builder.query({
    //   query: () => {
    //     return `users`;
    //   },
    // }),

    getUsers: builder.query({
      query: (queryArg = {}) => {
        const query = new URLSearchParams(queryArg).toString();
        return `users?${query}`;
      },
    }),
    getOptions: builder.query({
      query: () => "users/options",
    }),
  }),
});

export const { useGetUsersQuery, useGetOptionsQuery } = userApi;
