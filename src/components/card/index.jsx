import Heart from "../../../src/assets/svg/Heart";
import HeartFill from "../../../src/assets/svg/HeartFill";
import SaveToPlayList from "../../../src/assets/svg/SaveToPlayList";
import RemoveFromPlayList from "../../../src/assets/svg/RemoveFromPlayList";

import "./card.css";

const Card = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div className="card">
      <img
        className="card-img"
        src={`${baseUrl}${movie.poster_path}`}
        alt={movie.name}
      />
      <span className="card-buttons">
        <span className="like-button">
          <HeartFill />
        </span>
        <span className="save-button">
          <SaveToPlayList />
        </span>
      </span>
    </div>
  );
};

export default Card;
