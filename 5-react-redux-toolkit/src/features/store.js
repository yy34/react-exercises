import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movie/index";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
