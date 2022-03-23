import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoMdAddCircleOutline, IoIosPeople } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import ReactPlayer from "react-player";

const MoviePage = () => {
  const [movie, setMovie] = useState([]);
  const [showPlayer, setShowPlayer] = useState(false);
  console.log(movie);

  const index = movie.videos?.results.findIndex(
    (element) => element.type === "Trailer"
  );

  const imageUrl = "https://image.tmdb.org/t/p/original/";

  const { id } = useParams();

  const fetchMovie = async () => {
    const movieRes = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&append_to_response=videos`
    );
    setMovie(movieRes.data);
  };

  const fetchShows = async () => {
    const showsRes = await axios.get(`
    https://api.themoviedb.org/3/tv/${id}?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&append_to_response=videos`);

    setMovie(showsRes.data);
  };

  useEffect(() => {
    fetchMovie();
    fetchShows();
  }, []);

  return (
    <div
      className="relative text-white min-h-[calc(100vh-72px)] object-cover bg-cover"
      style={{
        backgroundImage: `url(${imageUrl}${movie.backdrop_path})`,
      }}
    >
      <div className="py-28 px-5 md:px-10">
        <h1 className="font-bold text-2xl md:text-5xl">
          {movie.title || movie.original_name}
        </h1>
        <div className="flex items-center space-x-4 md:space-x-8 py-5 md:py-10">
          <button className="px-6 md:px-10 py-2 bg-white text-black cursor-pointer hover:bg-slate-200">
            Play
          </button>
          <button
            className="px-6 md:px-10 py-2 bg-black/30 text-white border-[2px] cursor-pointer hover:bg-black/10"
            onClick={() => setShowPlayer(true)}
          >
            Trailer
          </button>
          <IoMdAddCircleOutline className="text-3xl md:text-4xl" />
          <IoIosPeople className="text-3xl md:text-4xl" />
        </div>
        <div className="pb-5 md:pb-10 text-xs space-x-2">
          <span>{movie.release_date || movie.first_air_date}</span>
          <span>{movie.runtime} min</span>
          {/* {movie?.genres.map((genre) => (
            <span>{genre.name}</span>
          ))} */}
        </div>
        <p className="md:w-5/12">{movie.overview}</p>
      </div>
      {showPlayer && (
        <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50" />
      )}
      <div
        className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
          showPlayer ? "opacity-100 z-50" : "opacity-0"
        }`}
      >
        <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
          <span className="font-bold">Play Trailer</span>
          <div>
            <AiOutlineClose
              className="text-2xl cursor-pointer"
              onClick={() => setShowPlayer(false)}
            />
          </div>
        </div>
        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${movie.videos?.results[index]?.key}`}
            width="100%"
            height="100%"
            controls={true}
            playing={showPlayer}
            style={{ position: "absolute", top: "0", left: "0" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
