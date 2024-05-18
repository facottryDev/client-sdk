class UnifiedData {
  constructor(id, title, overview, backdropImage, thumbnail, imdb, streams) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.backdropImage = backdropImage;
    this.thumbnail = thumbnail;
    this.imdb = imdb;
    this.streams = streams;
  }
}

function translateFromTMDB(response) {
  console.log("tewadsf", response);
  // check if response is an array
  if (Array.isArray(response)) {
    const translatedData = response.map((item) => {
      const id = item.id;
      const title = item.title || item.name;
      const overview = item.overview;
      const backdropImage = item.backdrop_path;
      const thumbnail = item.poster_path;
      const imdb = item.vote_average;
      const streams = item.popularity;
      return new UnifiedData(
        id,
        title,
        overview,
        backdropImage,
        thumbnail,
        imdb,
        streams
      );
    });
    return translatedData;
  }

  const id = response.id;
  const title = response.title || response.name;
  const overview = response.overview;
  const backdropImage = response.backdrop_path;
  const thumbnail = response.poster_path;
  return new UnifiedData(id, title, overview, backdropImage, thumbnail);
}

function translateFromOMDB(response) {
  const id = response.imdbID;
  const title = response.Title;
  const overview = response.Plot;
  const backdropImage = null; 
  const thumbnail = null; 
  return new UnifiedData(id, title, overview, backdropImage, thumbnail);
}

export async function fetchFromTMDB(query, type, id = null, genreId = null) {
  const tmdbApiKey = import.meta.env.VITE_API_KEY;
  const baseURl = import.meta.env.VITE_SERVER_PROD_URL;
  var url = "";
  if (query === "All Movies" || query === "All Shows") {
    url = `${baseURl}/discover/${type}?api_key=${tmdbApiKey}`;
  } else if (query === "Comedy Movies" || query === "Romantic Movies") {
    console.log("inside the function, genreId:", genreId);
    url = `${baseURl}/discover/${type}?api_key=${tmdbApiKey}&with_genres=${genreId}`;
  } else if (query === "Similar Movies") {
    url = `${baseURl}/${type}/${id}/similar?api_key=${tmdbApiKey}`;
  } else if (query === "Trending Movies") {
    url = `${baseURl}/trending/${type}/week?api_key=${tmdbApiKey}`;
  } else if (query === "Search Movie") {
    url = `${baseURl}/${type}/${id}?api_key=${tmdbApiKey}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data.results || data;
}

export async function fetchFromOMDB(query) {
  const omdbApiKey = "YOUR_OMDB_API_KEY";
  const url = `http://www.omdbapi.com/?apikey=${omdbApiKey}&t=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchDataFromAPI(api, query, type, id, genreId) {
  let translatedData;
  if (api === "TMDB") {
    const tmdbResponse = await fetchFromTMDB(query, type, id, genreId);
    translatedData = translateFromTMDB(tmdbResponse);
  } else if (api === "OMDB") {
    const omdbResponse = await fetchFromOMDB(query);
    translatedData = translateFromOMDB(omdbResponse);
  }
  return translatedData;
}

// fetchDataFromAPI("TMDB", "All Movies", "movie", "0").then((data) => {
//   console.log("Translated data from TMDB:", data);
// });
