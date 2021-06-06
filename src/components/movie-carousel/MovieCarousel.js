import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useSelector } from "react-redux";

const responsiveConfig = {
  desktop: {
    breakpoint: { max: 8000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

const MovieCarousel = ({ movies }) => {
  return (
    <Carousel responsive={responsiveConfig} draggable={false}>
      {movies.map((movie) => {
        return (
          <img style={{ width: "95%", height: "100%" }} src={movie.poster} />
        );
      })}
    </Carousel>
  );
};

export default MovieCarousel;
