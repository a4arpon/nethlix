'use client'

import ContentCard from '@/components/shared/Cards/ContentCard'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const TopMovies = ({ topMovies }) => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-3 pb-2 border-b-2">
        Top Movies
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="h-[620px] w-full"
      >
        {topMovies?.map((item) => (
          <SwiperSlide key={item?.id}>
            <ContentCard contentData={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default TopMovies
