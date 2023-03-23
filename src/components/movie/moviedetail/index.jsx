import { useEffect, useState } from "react";
import MovieButtons from "../moviebuttons";
import "./moviedetail.css";

const MovieDetail = ({ movie, isForMoviePage }) => {
  const [bottomStyle, setBottomStyle] = useState();

  useEffect(() => {
    isForMoviePage ? setBottomStyle("10vh") : setBottomStyle("30vh");
  }, [isForMoviePage]);

  return (
    <article
      className="movie-detail"
      style={{
        bottom: bottomStyle,
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
        <p className="movie-description">{movie?.overview}</p>
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
