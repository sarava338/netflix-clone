import { useNavigate } from "react-router-dom";
import "./moviebuttons.css";

export default function MovieButtons({ movieID, isForMoviePage }) {
  const navigate = useNavigate();

  const styleForMovieButtons = {
    margin: "3em",
    backgroundColor: "transparent",
  };

  return (
    <>
      <div
        className="movie-buttons"
        style={isForMoviePage && styleForMovieButtons}
      >
        <button className="movie-button">play</button>
        {!isForMoviePage && (
          <button
            className="movie-button"
            onClick={() => navigate(`/movie/${movieID}`)}
          >
            view
          </button>
        )}
      </div>
    </>
  );
}
