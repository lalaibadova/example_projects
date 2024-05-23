import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const foundationApi = createApi({
  reducerPath: 'foundationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:2020/' }),
  endpoints: (builder) => ({
    getAllFoundation: builder.query({
      query: () => `foundation`,
    }),
    getById: builder.query({
      query: (id) => `foundation/${id}`,
    }), 
    deleteFoundation: builder.mutation({
      query: (id) => ({
        url: `foundation/${id}`,
        method: 'DELETE',
      }),
    }),
    postFoundation: builder.mutation({
      query: (payload) => ({
        url: `foundation`,
        method: 'POST',
        body: payload,
      }),
    }),
  }),
})

export const { useGetAllFoundationQuery,useDeleteFoundationMutation,useGetByIdQuery,usePostFoundationMutation } = foundationApi