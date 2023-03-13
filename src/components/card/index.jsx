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
    </div>
  );
};

export default Card;
