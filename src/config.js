export const fetcher = (...args) => fetch(...args).then(res => res.json())

export const apiKey = '1760ac0af799ab5fc2105b216bc09ce0'
export const tmdbEndPoint = "https://api.themoviedb.org/3/movie";
export const tmdbEndPointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
    getMovieList: (type, page = 1) => `${tmdbEndPoint}/${type}?api_key=${apiKey}&page=${page}`,
    getMovieDetail: (movieId) => `${tmdbEndPoint}/${movieId}?api_key=${apiKey}`,
    getMovieMeta: (movieId, type) => `${tmdbEndPoint}/${movieId}/${type}?api_key=${apiKey}`,
    getMovieSearch: (query, page) => `${tmdbEndPointSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
    imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`
};