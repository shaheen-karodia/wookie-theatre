import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MOVIE_API_BASE_URI } from "../constant";
import _ from "lodash";

const onFetchMoviesPending = (state) => {
  state.status = "loading";
};

const onFetchMoviesSuccess = (state, action) => {
  state.status = "succeeded";

  const movies = action.payload.movies;
  state.moviesBySlug = _.mapKeys(movies, "slug");
};

const onFetchMoviesFailure = (state, action) => {
  state.status = "failed";
  state.error = action.error.message;
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios({
    url: MOVIE_API_BASE_URI,
    method: "get",
    headers: {
      Authorization: `Bearer Wookie2019`,
    },
  });

  return response.data;
});

const initialState = {
  moviesBySlug: {},
  status: "idle",
  error: null,
};

export const slice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovies.pending]: onFetchMoviesPending,
    [fetchMovies.fulfilled]: onFetchMoviesSuccess,
    [fetchMovies.rejected]: onFetchMoviesFailure,
  },
});

export default slice.reducer;
