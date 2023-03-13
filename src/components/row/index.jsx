import React, { useState, useEffect } from "react";
import Card from "../card";
import axios from "../../axios";
import "./row.css";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchApi();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <article className="row">
      <h2>{title}</h2>
      <section className="card-wrapper">
        {movies.map((movie) => {
          return <Card movie={movie} key={movie.id} />;
        })}
      </section>
    </article>
  );
};

export default Row;
