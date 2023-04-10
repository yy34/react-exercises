import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MovieService } from "../../../common/api/MovieApi";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  function (search) {
    MovieService.getMovies(search)
      .then((data) => {
        console.log("data", data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
export const fetchShows = createAsyncThunk(
  "movies/fetchShows",
  function (search) {
    MovieService.getShows(search)
      .then((data) => {
        console.log("data", data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

const initialState = {
  movies: {},
  shows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload };
    },

    [fetchShows.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload };
    },
  },
});

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
