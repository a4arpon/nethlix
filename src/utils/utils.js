/*
This is the utility functions file for the entire web app.
All sensitive operations are centenaries by using Try-Catch block. If any chance the server falls or any issue while getting data from server in that case the catch block will handle the situation and prevent the web app from crashing.
*/

// Get Popular movies from TMDB server.
const getPopularMedia = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_SERVER}/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API}`,
      {
        cache: 'no-cache', // By default next caches the results from api. This no-cache value defies not to cache te response.
      }
    )
    const result = await response.json()
    return result?.results || []
  } catch (error) {
    console.log('Unknown error occurred.')
    return []
  }
}
const getMovieGenres = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TMDB_SERVER}/3/genre/movie/list?language=en-US&api_key=${process.env.NEXT_PUBLIC_TMDB_API}`,
      {
        next: { revalidate: 43200 }, // This object defines to revalidate the response in every  43200 seconds.
      }
    )
    const result = await response.json()
    return result?.genres
  } catch (error) {
    console.log('Unknown error occurred.')
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
    console.log('Unknown error occurred.')
    return []
  }
}
export { getPopularMedia, getMovieGenres, getCategoryMovies }
