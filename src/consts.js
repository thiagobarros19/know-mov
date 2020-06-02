const API = {
  API_KEY: '0ddec5e1a63e57c0b2f3994b90bcf868',
  API_TOKEN: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGRlYzVlMWE2M2U1N2MwYjJmMzk5NGI5MGJjZjg2OCIsInN1YiI6IjVlZDNlZjI1YWFlYzcxMDAyMTZiZmViNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cs3pesRR4TKZD6NL6aV5BnsTU0Kj3JmLdPU1iDFVLtg'
}

export default {
  API_KEY: API.API_KEY,
  API_TOKEN: API.API_TOKEN,
  API_URL: 'https://api.themoviedb.org/3',
  API_IMAGE_URL: 'https://image.tmdb.org/t/p/original',
  API_IMAGE_URL_SMALL: 'https://image.tmdb.org/t/p/w500',
  GET_MOVIE_ID: `?api_key=${API.API_KEY}&language=pt-BR`,
  GENRE_URL: `/genre/movie/list?api_key=${API.API_KEY}&language=pt-BR`,
  FEATURE_URL: `/movie/upcoming?api_key=${API.API_KEY}&language=pt-BR`,
  POPULAR_URL: `/movie/popular?api_key=${API.API_KEY}&language=pt-BR`,
  LATEST_URL: `movie/latest?api_key=${API.API_KEY}&language=pt-BR`,
  TOP_RATED_URL: `/movie/top_rated?api_key=${API.API_KEY}&language=pt-BR`,
  TRENDS_URL: `/movie/now_playing?api_key=${API.API_KEY}&language=pt-BR`,
  SEARCH_MOVIE: `/search/multi?api_key=${API.API_KEY}&language=pt-BR`
}



