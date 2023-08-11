import CategoryLists from '@/components/Other/homePage/CategoryLists'
import PopularAtTheTime from '@/components/Other/homePage/PopularAtThisTime'
import Slider from '@/components/shared/Slider/Slider'
import {
  getCategoryMovies,
  getMovieGenres,
  getPopularMedia
} from '@/utils/utils'

const Home = async () => {
  const popularMovies = await getPopularMedia()
  const categoryList = await getMovieGenres()
  const actionList = await getCategoryMovies()
  return (
    <main className="container flex flex-col gap-10 mt-10 mx-auto p-3 lg:p-0">
      <Slider popularMovies={popularMovies} />
      <CategoryLists categoryList={categoryList} />
      <PopularAtTheTime popularMovies={popularMovies} />
    </main>
  )
}

export default Home
