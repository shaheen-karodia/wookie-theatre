import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MovieCarousel.scss";
import { Link } from "react-router-dom";

const responsiveConfig = {
  desktop: {
    breakpoint: { max: 8000, min: 601 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 600, min: 376 },
    items: 3,
  },
  phone: {
    breakpoint: { max: 375, min: 0 },
    items: 2,
  },
};

const MovieCarousel = ({ movies }) => {
  return (
    <Carousel responsive={responsiveConfig} draggable={false}>
      {movies.map((movie) => {
        return (
          <Link to={`/movies/${movie.slug}`} key={movie.slug}>
            <img className="movie-carousel-item" src={movie.poster} />
          </Link>
        );
      })}
    </Carousel>
  );
};

export default MovieCarousel;
