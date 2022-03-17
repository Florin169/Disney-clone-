import axios from "axios";

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
        `https://api.themoviedb.org/3/tv/top_rated?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&page=1`
      ),
    ])
    .then(
      axios.spread((res1, res2, res3, res4) => {
        const movies = res1.data.results;
        const topMovies = res2.data.results;
        const series = res3.data.results;
        const topSeries = res4.data.results;
      })
    );
};

export default fetchData;
