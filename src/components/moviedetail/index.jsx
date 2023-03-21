import './moviedetail.css'

const MovieDetail = ({movie, isForMoviePage}) => {

  isForMoviePage && console.log(movie)

  return (
    <>
      <section className="movie-content">
        <h1 className="movie-title">
          {movie?.title ||
            movie?.name ||
            movie?.original_name ||
            movie?.original_title}
        </h1>
        {!isForMoviePage && <div className="movie-buttons">
            <button className="movie-button">play</button>
            <button className="movie-button">view</button>
          </div>
        }
        <p className="movie-description">{movie?.overview}</p>
      </section>

      {isForMoviePage && <div className="movie-buttons"
        style={{
          margin : '3em',
          backgroundColor: 'transparent',
        }}
      >
          <button className="movie-button">play</button>
          <button className="movie-button">view</button>
        </div>
      }

      {isForMoviePage && 
        <section className='movie-page-details'>
          <ul className='movie-page-list'>
            <li className='budget'>Budjet : {movie?.budget}</li>
            <li className='genres'>Genres : 
              { movie?.genres.map( genre => {
                  return <span className='genre' key={genre.id}> {genre.name} </span>
                }
              )}
            </li>
            <li className='release-date'>Released On : {movie?.release_date}</li>
            <li className='revenue'>Revenue : {movie?.revenue}</li>
            <li className='run-time'>Run time : {movie?.runtime} mins</li>
          </ul>
        </section>
      }

    </>
  )
}

export default MovieDetail