import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { baseUrl } from "../../utils/requests";
import "./header.css";

const Header = ({ fetchUrl }) => {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const request = await axios.get(fetchUrl);
      let randomIndexOfMovies = Math.floor(
        Math.random() * request.data.results.length
      );
      setMovie(request.data.results[randomIndexOfMovies]);
      return request.data.results[randomIndexOfMovies];
    }
    fetchApi();
  }, [fetchUrl]);
  
  return (
    <header
      className="header"
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
    </header>
  );
};

export default Header;
