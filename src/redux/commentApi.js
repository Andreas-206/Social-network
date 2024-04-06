import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://65f6b8a641d90c1c5e0b3247.mockapi.io/api";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ["Comments"],
    }),
    addComment: builder.mutation({
      query: (data) => ({
        url: API_ENDPOINT,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Comments"],
    }),
  }),
});

export const { useGetCommentsQuery, useAddCommentMutation } = commentApi;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const api = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
//   tagTypes: ['Posts'],
//   endpoints: (build) => ({
//     getPosts: build.query({
//       query: () => 'posts',
//       providesTags: (result) =>
//         result ? result.map(({ id }) => ({ type: 'Posts', id })) : [],
//     }),
//     addPost: build.mutation({
//       query: (body) => ({
//         url: `posts`,
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['Posts'],
//     }),
//   }),
// })

// Auto-generated hooks
// export const { useGetPostsQuery, useAddPostMutation } = api

// Possible exports
// export const { endpoints, reducerPath, reducer, middleware } = api
// reducerPath, reducer, middleware are only used in store configuration
// endpoints will have:
// endpoints.getPosts.initiate(), endpoints.getPosts.select(), endpoints.getPosts.useQuery()
// endpoints.addPost.initiate(), endpoints.addPost.select(), endpoints.addPost.useMutation()
// see `createApi` overview for _all exports_
