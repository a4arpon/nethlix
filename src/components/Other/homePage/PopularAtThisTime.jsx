'use client'

import ContentCard from '@/components/shared/Cards/ContentCard'

const PopularAtTheTime = ({ popularMovies }) => {
  return (
    <section id="actionSection" className="grid gap-3 lg:grid-cols-3">
      {popularMovies?.map((item) => (
        <ContentCard key={item?.id} contentData={item} />
      ))}
    </section>
  )
}

export default PopularAtTheTime
