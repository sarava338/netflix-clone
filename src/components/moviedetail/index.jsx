import './moviedetail.css'

const MovieDetail = ({movie}) => {

  return (
    <>
      <section className="movie-content">
        <h1 className="movie-title">
          {movie?.title ||
            movie?.name ||
            movie?.original_name ||
            movie?.original_title}
        </h1>
        <div className="movie-buttons">
          <button className="movie-button">play</button>
          <button className="movie-button">view</button>
        </div>
        <p className="movie-description">{movie?.overview}</p>
      </section>
    </>
  )
}

export default MovieDetail