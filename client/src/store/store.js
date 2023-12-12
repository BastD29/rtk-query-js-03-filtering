import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./user/apiSlice";

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
  // getDefaultMiddleware({ serializableCheck: false }).concat(
  //   userApi.middleware
  // ),
});

export { store };
