export const fetcher = (...args) => fetch(...args).then(res => res.json())

export const apiKey = '1760ac0af799ab5fc2105b216bc09ce0'
export const tmdbEndPoint = "https://api.themoviedb.org/3/movie";
//`https://api.themoviedb.org/3/movie/${moviesId}/videos?api_key=${apiKey}
export const tmdbAPI = {
    getMovieList: (type) => `${tmdbEndPoint}/${type}?api_key=${apiKey}`,
    getMovieDetail: (movieId) => `${tmdbEndPoint}/${movieId}?api_key=${apiKey}`,
    getMovieMeta: (movieId, type) => `${tmdbEndPoint}/${movieId}/${type}?api_key=${apiKey}`,
    imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`
};