import React, { useEffect, useState } from "react";
import Brands from "../components/Brands";
import MoviesColections from "../components/MoviesColection";
import ShowsCollection from "../components/ShowsCollection";
import Slider from "../components/Slider";
import axios from "axios";
import background from "../assets/background.png";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  console.log(movies);

  const fetchData = () => {
    axios
      .all([
        axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/tv/top_rated?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&page=2`
        ),
      ])
      .then(
        axios.spread((res1, res2, res3, res4) => {
          const movies = res1.data.results;
          const topMovies = res2.data.results;
          const series = res3.data.results;
          const topSeries = res4.data.results;
          setMovies(movies);
          setTopMovies(topMovies);
          setSeries(series);
          setTopSeries(topSeries);
        })
      );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main
      className="min-h-screen after:bg-brandsBg after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]"
      style={{ backgroundImage: `url('${background}')` }}
    >
      <Slider />
      <Brands />
      <MoviesColections results={movies} title="Popular Movies" />
      <ShowsCollection results={series} title="Popular Shows" />
      <MoviesColections results={topMovies} title="Top Rated Movies" />
      <ShowsCollection results={topSeries} title="Top rated Shows" />
    </main>
  );
};

export default Home;
