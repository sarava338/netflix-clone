import { useEffect, useState } from "react";
import MovieButtons from "../moviebuttons";
import "./moviedetail.css";

const MovieDetail = ({ movie, isForMoviePage }) => {
  const [bottomStyle, setBottomStyle] = useState();

  useEffect(() => {
    isForMoviePage ? setBottomStyle("10%") : setBottomStyle("30%");
  }, [isForMoviePage]);

  const truncate = (str, n) => {
    return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
  };

  return (
    <article
      className="movie-detail"
      style={{
        bottom: bottomStyle, //Need to configure for mobile view
      }}
    >
      <section className="movie-content">
        <h1 className="movie-title">
          {movie?.title ||
            movie?.name ||
            movie?.original_name ||
            movie?.original_title}
        </h1>
        {!isForMoviePage && <MovieButtons movieID={movie.id} />}
        <p className="movie-description">{truncate(movie?.overview, 150)}</p>
      </section>

      {isForMoviePage && <MovieButtons isForMoviePage />}

      {isForMoviePage && (
        <section className="movie-page-details">
          <ul className="movie-page-list">
            <li className="budget">Budjet : {movie?.budget}</li>
            <li className="genres">
              Genres :
              {movie?.genres.map((genre) => {
                return (
                  <span className="genre" key={genre.id}>
                    {" "}
                    {genre.name}{" "}
                  </span>
                );
              })}
            </li>
            <li className="release-date">
              Released On : {movie?.release_date}
            </li>
            <li className="revenue">Revenue : {movie?.revenue}</li>
            <li className="run-time">Run time : {movie?.runtime} mins</li>
          </ul>
        </section>
      )}
    </article>
  );
};

export default MovieDetail;
