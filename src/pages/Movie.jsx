import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/movie/moviedetail";
import { API_KEY, baseUrl } from "../utils/requests";

const Movie = () => {

  const params = useParams()
  const [ movie, setMovie ] = useState();

  const fetchUrl = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${API_KEY}`

  useEffect(() => {
    async function fetchApi() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data);
      return request.data;
    }
    fetchApi();
  }, [fetchUrl]);

  return (
    <main
      className="movie-back-ground"
      style={{
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
      }}
    >
      <MovieDetail movie={movie} isForMoviePage/>
    </main>
  )
};

export default Movie;
