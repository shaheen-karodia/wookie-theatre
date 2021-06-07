import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./movie-carousel.scss";
import { Link } from "react-router-dom";

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
          <Link to={`/movies/${movie.slug}`} key={movie.slug}>
            <img className="movie-carousel-item" src={movie.poster} />
          </Link>
        );
      })}
    </Carousel>
  );
};

export default MovieCarousel;
