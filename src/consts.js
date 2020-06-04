const API = {
  API_KEY: '0ddec5e1a63e57c0b2f3994b90bcf868',
  API_TOKEN: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGRlYzVlMWE2M2U1N2MwYjJmMzk5NGI5MGJjZjg2OCIsInN1YiI6IjVlZDNlZjI1YWFlYzcxMDAyMTZiZmViNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cs3pesRR4TKZD6NL6aV5BnsTU0Kj3JmLdPU1iDFVLtg',
  KEY:`?api_key=0ddec5e1a63e57c0b2f3994b90bcf868`,
  LANGUAGE: '&language=pt-BR'
}

export default {
  API_LANGUAGE: API.LANGUAGE,
  API_KEY: API.KEY,
  API_TOKEN: API.API_TOKEN,
  API_URL: 'https://api.themoviedb.org/3',
  API_IMAGE_URL: 'https://image.tmdb.org/t/p/original',
  API_IMAGE_URL_SMALL: 'https://image.tmdb.org/t/p/w500',
  MOVIE_URL: `/movie`,
  TV_URL: `/tv`,
  TRENDS: `/trending`,
  DISCOVER: `/discover`,
  GET_MOVIE_ID: `${API.KEY}&language=pt-BR`,
  GENRE_MOVIE_URL: `/genre/movie/list${API.KEY}&language=pt-BR`,
  GENRE_TV_URL: `/genre/tv/list${API.KEY}&language=pt-BR`,
  FEATURE_URL: `/upcoming${API.KEY}&language=pt-BR`,
  POPULAR_URL: `/popular${API.KEY}&language=pt-BR`,
  LATEST_URL: `/latest${API.KEY}&language=pt-BR`,
  TOP_RATED_URL: `/top_rated${API.KEY}&language=pt-BR`,
  NOW_PLAYING_URL: `/now_playing${API.KEY}&language=pt-BR`,
  ON_THE_AIR_URL: `/on_the_air${API.KEY}&language=pt-BR`,
  TV_AIRING_TODAY_URL: `/airing_today${API.KEY}&language=pt-BR`,
  SEARCH_MOVIE: `/search/multi${API.KEY}&language=pt-BR`,
  TRENDS_DAY_URL: `/trending/movie/day${API.KEY}&language=pt-BR`,
  TRENDS_WEEK_URL: `/trending/movie/week${API.KEY}`,
  MOST_POPULAR_URL: `${API.KEY}&language=pt-BR&sort_by=popularity.desc&include_video=false`
}
