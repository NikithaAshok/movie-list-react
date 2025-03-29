const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMThhOTJmNjMxZDk1Nzc0ZmE2ZjA1YTI4YjVkOTdjMyIsIm5iZiI6MTc0MzI2MzcxNC45Njk5OTk4LCJzdWIiOiI2N2U4MTdlMmJkMWY5NmY5ZWY2MzcwZGMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.62FHNbtjBdB5a6TkPGAP9JTynyNY_I6fUEWKnmW_jU8";

export const getPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        Accept: "application/json",
      },
    }
  );

  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        Accept: "application/json",
      },
    }
  );

  const data = await response.json();
  return data.results;
};
