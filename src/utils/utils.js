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
export { getPopularMedia }
