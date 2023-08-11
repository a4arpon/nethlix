import CategoryLists from '@/components/Other/homePage/CategoryLists'
import PopularMovies from '@/components/Other/homePage/PopularMovies'
import NavItem from '@/components/shared/Navbar/Navnar'
import { getPopularMedia } from '@/utils/utils'

const Home = async () => {
  const popularMovies = await getPopularMedia()

  return (
    <>
      <NavItem />

      <main className="container flex flex-col gap-10 mt-10 mx-auto p-3 lg:p-0">
        <PopularMovies popularMovies={popularMovies?.results} />
        <CategoryLists />
      </main>
    </>
  )
}

export default Home
