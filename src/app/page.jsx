import ActionOfTheTime from '@/components/Other/homePage/ActionOfTheTime'
import CategoryLists from '@/components/Other/homePage/CategoryLists'
import PopularMovies from '@/components/Other/homePage/PopularMovies'
import NavItem from '@/components/shared/Navbar/Navnar'
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
    <>
      <NavItem />

      <main className="container flex flex-col gap-10 mt-10 mx-auto p-3 lg:p-0">
        <PopularMovies popularMovies={popularMovies?.results} />
        <CategoryLists categoryList={categoryList} />
        <ActionOfTheTime actionList={actionList} />
      </main>
    </>
  )
}

export default Home
