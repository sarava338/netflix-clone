import './movie.css'
import { baseUrl } from "../../utils/requests";

const Movie = (movie) => {

  return <>
    <article
      className="movie"
      style={{
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <section className="header-content">
        <h1 className="header-title">
          {movie?.title ||
            movie?.name ||
            movie?.original_name ||
            movie?.original_title}
        </h1>
        <div className="header-buttons">
          <button className="header-button">play</button>
          <button className="header-button">view</button>
        </div>
        <p className="header-description">{movie.overview}</p>
      </section>
    </article>
  </>;
};

export default Movie;
