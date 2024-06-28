import { configureStore } from "@reduxjs/toolkit";
import { apiCharger } from "../services/api-chargers";

const store = configureStore({
  reducer: {
    [apiCharger.reducerPath]: apiCharger.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiCharger.middleware),
});

export default store;
