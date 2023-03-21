import { baseUrl } from "../../utils/requests"
import './moviedetail.css'

const MovieDetail = ({movie}) => {

console.log(movie);
  return (
    <>
      <article 
        className="movie-back-ground"
        style={{
          backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
        }}
      >
        <section className="movie-detail">
          <h1 className="movie-title">
            { movie?.name ||
              movie?.title ||
              movie?.original_name ||
              movie?.original_title }
          </h1>
          <p className="movie-overview" >{movie?.overview}</p>
        </section>
      </article>
    </>
  )
}

export default MovieDetail