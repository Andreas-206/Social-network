import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = '/comments';
const BASE_URL = 'https://65f6b8a641d90c1c5e0b3247.mockapi.io/api';

export const commentApi = createApi({
    reducerPath: 'comments',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: ['Comments'],
    endpoints: (builder) => ({}),
});

export const {} = commentApi;
