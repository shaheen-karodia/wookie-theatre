import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MOVIE_API_BASE_URI } from "../constant";
import _ from "lodash";

const initialState = {
  all_movies: {},
  moviesByGenra: {},
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

      const movies = action.payload.movies;
      state.all_movies = _.mapKeys(movies, "slug");
      state.moviesByGenra = createMovieByGeneraMap(movies);
    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

const createMovieByGeneraMap = (movies) => {
  const map = {};

  movies.forEach((movie) => {
    movie.genres.forEach((genre) => {
      if (!map.hasOwnProperty(genre)) {
        map[genre] = [];
      }
      map[genre].push(movie.slug);
    });
  });

  return map;
};

// export const { increment, decrement, incrementByAmount } = slice.actions;

export default slice.reducer;
