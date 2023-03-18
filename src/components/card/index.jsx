import {useState} from 'react'
import Heart from "../../../src/assets/svg/Heart";
import HeartFill from "../../../src/assets/svg/HeartFill";
import SaveToPlayList from "../../../src/assets/svg/SaveToPlayList";
import RemoveFromPlayList from "../../../src/assets/svg/RemoveFromPlayList";

import "./card.css";

const Card = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  
  const [like, setLike] = useState(false)
  const [save, setSave] = useState(false)

  const handleToLike = () => {
    if (like) setLike(false)
    else setLike(true)
  }

  const handleToSave = () => {
    if(save) setSave(false)
    else setSave(true)
  }
  
  return (
    <div className="card">
      <img
        className="card-img"
        src={`${baseUrl}${movie.poster_path}`}
        alt={movie.name}
      />
      <span className="card-buttons">
        <span className="like-button" onClick={handleToLike}>
          {like ? <HeartFill /> : <Heart />}
        </span>
        <span className="save-button" onClick={handleToSave}>
          {save ? <SaveToPlayList /> : <RemoveFromPlayList />}
        </span>
      </span>
    </div>
  );
};

export default Card;
