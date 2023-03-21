import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../utils/requests';

import "./card.css";

const Card = ({ movie }) => {

  const navigate = useNavigate()

  const showMoviePage = () => {
    navigate(`movie/${movie.id}`)
  }

  return (
    <div className="card">
        <img 
          onClick={showMoviePage}
          className="card-img"
          src={`${baseUrl}${movie.poster_path}`}
          alt={movie.name}
        />
    </div>
  );
};

export default Card;
