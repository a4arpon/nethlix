import { getSpecifiedMovie } from '@/utils/utils'
import Image from 'next/image'

export const generateMetadata = async ({ params }) => {
  const movieData = await getSpecifiedMovie(params?.contentID)
  return {
    title: movieData?.original_title + ' | Nethlix.',
    description: movieData?.overview,
    openGraph: {
      images: movieData?.poster_path,
      title: movieData?.original_title,
      description: movieData?.overview,
    },
  }
}
const MediaPage = async ({ params }) => {
  const movieID = params?.contentID
  const movieData = await getSpecifiedMovie(movieID)
  return (
    <main
      className="container flex flex-col gap-10 mt-10 mx-auto bg-cover bg-no-repeat bg-fixed rounded-lg"
      style={{
        backgroundImage: `url(
        https://image.tmdb.org/t/p/original${movieData?.backdrop_path}
      )`,
        backgroundPosition: 'center',
      }}
    >
      <div className="min-h-screen bg-black bg-opacity-50 text-white p-3 lg:p-5 flex flex-col-reverse lg:flex-row gap-3 rounded-lg">
        <div className="lg:w-3/5">
          <h1 className="text-3xl lg:text-5xl mb-5">
            {movieData?.original_title}
          </h1>
          <p className="text-xl">{movieData?.tagline}</p>
          <p>Vote: {movieData?.vote_average}</p>
          <p>Vote Count: {movieData?.vote_count}</p>
          <p className="mt-3">Runtime: {movieData?.runtime}</p>
          <p>Release Date: {movieData?.release_date}</p>
          <p>Popularity: {movieData?.popularity}</p>
          <p className="mt-5 text-justify">
            <span className="text-xl">Overview</span> <br />
            {movieData?.overview}
          </p>
        </div>
        <div className="lg:w-2/5">
          <Image
            src={`https://image.tmdb.org/t/p/original${movieData?.poster_path}`}
            alt="card-image"
            width="800"
            height="1200"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </main>
  )
}

export default MediaPage
