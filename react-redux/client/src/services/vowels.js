import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const vowelsApi = createApi({
  reducerPath: 'vowelApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://my-json-server.typicode.com/yamoo9/assets/',
  }),
  endpoints: (builder) => ({
    getVowels: builder.query({
      query: () => 'vowels',
    }),
    getVowel: builder.query({
      query: (id) => `vowels/${id}`,
    }),
  }),
});

export const { useGetVowelsQuery, useGetVowelQuery } = vowelsApi;
