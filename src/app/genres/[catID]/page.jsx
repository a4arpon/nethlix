import ContentCard from '@/components/shared/Cards/ContentCard'
import Slider from '@/components/shared/Slider/Slider'
import { getCategoryMovies } from '@/utils/utils'

const GenrePage = async ({ params }) => {
  const catID = params?.catID
  const categoryData = await getCategoryMovies(catID)
  return (
    <main className="container flex flex-col gap-10 mt-10 mx-auto p-3 lg:p-0">
      <Slider categoryData={categoryData} />
      <section id="GenreMovies" className="grid lg:grid-cols-3 gap-3 ">
        {categoryData?.map((item) => (
          <ContentCard contentData={item} key={item?.id} />
        ))}
      </section>
    </main>
  )
}

export default GenrePage
