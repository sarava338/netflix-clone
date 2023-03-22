import { useNavigate } from "react-router-dom";
import "./moviebuttons.css";

export default function MovieButtons({ movieID, isForMoviePage }) {
  const navigate = useNavigate();

  return (
    <>
      <section
        className={`movie-buttons ${isForMoviePage && "for-movie-page"}`}
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
      </section>
    </>
  );
}
