import { useState } from "react";
import "./card.css";

const Card = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";

  const [show, setShow] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <img
        className="card-img"
        src={`${baseUrl}${movie.poster_path}`}
        alt={movie.name}
      />
      {show && (
        <span className="card-buttons">
          <button className='like-button'>Like</button>
          <button className="save-button">Save</button>
        </span>
      )}
    </div>
  );
};

export default Card;
