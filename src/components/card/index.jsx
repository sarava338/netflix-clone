import { Link } from 'react-router-dom';
import { baseUrl } from '../../utils/requests';

import "./card.css";

const Card = ({ movie }) => {

  return (
    <div className="card">
      <Link to={`/movie/${movie.id}`} state={movie} >
        <img
          className="card-img"
          src={`${baseUrl}${movie.poster_path}`}
          alt={movie.name}
        />
      </Link>
    </div>
  );
};

export default Card;
