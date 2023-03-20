import React from 'react'
import { baseUrl } from '../../utils/requests'

const MovieBackGround = (movie) => {
  return (
    <article 
      className="movie-back-ground"
      style={{
        backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
    </article>
  )
}

export default MovieBackGround