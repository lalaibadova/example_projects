import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { foundationApi } from './foundationApi'

export const store = configureStore({
  reducer: {
    [foundationApi.reducerPath]: foundationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foundationApi.middleware),
})

setupListeners(store.dispatch)