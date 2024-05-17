import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const menuApi = createApi({
  reducerPath: "menuApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:7070/" }),
  endpoints: (builder) => ({
    getAllMenu: builder.query({
      query: () => `menu`,
    }),
    getMenuById: builder.query({
      query: (id) => `menu/:${id}`,
    }),
    deleteMenu: builder.mutation({
      query: (id) => ({
        url: `menu/${id}`,
        method: "DELETE",
      }),
    }),
    postMenu: builder.mutation({
      query: (payload) => ({
        url: `menu`,
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetAllMenuQuery ,useDeleteMenuMutation,useGetMenuByIdQuery,usePostMenuMutation } = menuApi;
