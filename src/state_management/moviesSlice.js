import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MOVIE_API_BASE_URI } from "../constant";
import _ from "lodash";

const initialState = {
  moviesBySlug: {},
  movieSlugsByGenra: {},
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
      state.moviesBySlug = _.mapKeys(movies, "slug");
      state.movieSlugsByGenra = getMovieSlugsByGenra(movies);
    },
    [fetchMovies.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

const getMovieSlugsByGenra = (movies) => {
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

export default slice.reducer;
