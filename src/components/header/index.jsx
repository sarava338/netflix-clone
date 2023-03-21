import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { baseUrl } from "../../utils/requests";
import MovieDetail from "../moviedetail";
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
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`
      }}
    >
      <MovieDetail movie={movie}/>
    </header>
  );
};

export default Header;
