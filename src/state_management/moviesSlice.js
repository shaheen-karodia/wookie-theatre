import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MOVIE_API_BASE_URI } from "../constant";
import apiEnumStates from "../enums/apiEnumStates";
import _ from "lodash";

const { IDLE, FAILED, SUCCEEDED, LOADING } = apiEnumStates;

const onFetchMoviesPending = (state) => {
  state.status = LOADING;
};

const onFetchMoviesSuccess = (state, action) => {
  state.status = SUCCEEDED;

  const movies = action.payload.movies;
  state.moviesBySlug = _.mapKeys(movies, "slug");
};

const onFetchMoviesFailure = (state, action) => {
  state.status = FAILED;
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
  status: IDLE,
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
