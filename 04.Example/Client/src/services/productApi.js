import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4040/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`,
    }),
    getById: builder.query({
      query: (id) => `products/${id}`,
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
    postProduct: builder.mutation({
      query: (payload) => {
        console.log("payload: ", payload);
        return {
          url: `products`,
          method: "POST",
          body: payload,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useDeleteProductMutation,
  useGetByIdQuery,
  usePostProductMutation,
} = productApi;
