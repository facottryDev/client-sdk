export function fetchMovies(url, callback) {
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => callback(data.results))
    .catch((error) => {
      console.error("Error fetching movies:", error);
    });
}

export function fetchMovies2(url, callback) {
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => callback(data))
    .catch((error) => {
      console.error("Error fetching movies:", error);
    });
}

function getBaseUrl() {
  if (import.meta.env.VITE_USE_PROD === "true")
    return import.meta.env.VITE_SERVER_PROD_URL;
  else {
    return import.meta.env.VITE_SERVER_PREPROD_URL;
  }
}

export function getAllMovies(value, callback) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = getBaseUrl();

  const url = `${baseUrl}/discover/${value}?api_key=${apiKey}`;
  fetchMovies(url, callback);
}

export function getMoviesByGenre(genreId, callback) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;
  fetchMovies(url, callback);
}

export function getTrendingMovies(callback) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
  fetchMovies(url, callback);
}

export function getSimilarMovies(value, callback) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${value}/similar?api_key=${apiKey}`;
  fetchMovies(url, callback);
}
export function getById(id, callback) {
  // console.log("inside this function");
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  // console.log("test", url);
  fetchMovies2(url, callback);
}

export const CLIENT_API = {
  getAllMovies: getAllMovies,
  getMoviesByGenre: getMoviesByGenre,
  getTrendingMovies: getTrendingMovies,
  getSimilarMovies: getSimilarMovies,
  getById: getById,
};

