import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MOVIE_API_BASE_URI } from "../constant";
import _ from "lodash";

const initialState = {
  all_movies: {},
  status: "idle",
  error: null,
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

export const slice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovies.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.all_movies = _.mapKeys(action.payload.movies, "slug");
    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

// export const { increment, decrement, incrementByAmount } = slice.actions;

// export const selectCount = (state) => state.counter.value;

export default slice.reducer;
