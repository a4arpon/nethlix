const getPopularMedia = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_SERVER}/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API}`,
      {
        cache: 'no-cache',
      }
    )
    const result = await response.json()
    return result
  } catch (error) {
    alert('Unknown error occurred.')
    return []
  }
}
const getMovieGenres = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_SERVER}/3/genre/movie/list?language=en-US&api_key=${process.env.NEXT_PUBLIC_TMDB_API}`,
      {
        next: { revalidate: 43200 },
      }
    )
    const result = await response.json()
    return result?.genres
  } catch (error) {
    alert('Unknown error occurred.')
    return []
  }
}
const getCategoryMovies = async (catID) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_SERVER}/3/discover/movie?api_key=${
        process.env.NEXT_PUBLIC_TMDB_API
      }&language=en-US&sort_by=popularity.desc&include_video=false&page=1&with_genres=${
        catID || 28
      }`,
      {
        cache: 'no-cache',
      }
    )
    const result = await response.json()
    return result?.results || []
  } catch (error) {
    alert('Unknown error occurred.')
    return []
  }
}
export { getPopularMedia, getMovieGenres, getCategoryMovies }
