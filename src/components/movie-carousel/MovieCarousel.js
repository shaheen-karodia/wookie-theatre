import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useSelector } from "react-redux";

const responsiveConfig = {
  desktop: {
    breakpoint: { max: 8000, min: 1024 },
    items: 7,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MovieCarousel = () => {
  const movies = useSelector((state) => Object.values(state.movies.all_movies));

  console.log("movies", movies);

  return (
    <Carousel
      containerClass="movie-carousel"
      partialVisible
      responsive={responsiveConfig}
      draggable={false}
    >
      {movies.map((movie) => {
        return (
          <img style={{ width: "70%", height: "100%" }} src={movie.poster} />
        );
      })}
    </Carousel>
  );
};

export default MovieCarousel;
