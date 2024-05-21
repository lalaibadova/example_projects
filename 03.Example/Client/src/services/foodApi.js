import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const foodApi = createApi({
  reducerPath: 'foodApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050/' }),
  endpoints: (builder) => ({
    getAllFood: builder.query({
      query: () => `foods`,
    }),
    getById: builder.query({
      query: (id) => `foods/${id}`,
    }),
    deleteFood: builder.mutation({
      query: (id) => ({
        url: `foods/${id}`,
        method: 'DELETE',
        
      }),
    }),
    postFood: builder.mutation  ({
      query: (payload) => ({
        url: `foods`,
        method: 'POST',
        body: payload,
      }),
    }),
  }),
})

export const {useDeleteFoodMutation,useGetAllFoodQuery,useGetByIdQuery,usePostFoodMutation } = foodApi