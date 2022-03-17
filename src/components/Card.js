import React from "react";
import { Link } from "react-router-dom";

const Card = ({ result }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <Link to={`/movie/${result.id}`}>
      <div className="card">
        <img
          src={
            `${baseUrl}${result.backdrop_path || result.poster_path}` ||
            `${baseUrl}${result.poster_path}`
          }
          loading="lazy"
          alt=""
        />
      </div>
    </Link>
  );
};

export default Card;
