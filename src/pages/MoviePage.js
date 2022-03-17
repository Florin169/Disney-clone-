import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MoviePage = () => {
  const [movie, setMovie] = useState([]);
  console.log(movie);
  const imageUrl = "https://image.tmdb.org/t/p/original/";

  const { id } = useParams();

  const fetchMovie = async () => {
    const movieRes = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US`
    );
    setMovie(movieRes.data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div
      className="text-white h-screen bg-cover"
      style={{ backgroundImage: `url(${imageUrl}${movie.backdrop_path})` }}
    >
      {id}
    </div>
  );
};

export default MoviePage;
