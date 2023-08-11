'use client'
import ContentCard from '@/components/shared/Cards/ContentCard'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const PopularMovies = ({ popularMovies }) => {
  return (
    <section id="popularMovies" className="">
      <h2 className="text-xl md:text-2xl lg:text-3xl border-b-2 pb-2 mb-3">
        Popular At This Time.
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper h-[600px]"
      >
        {popularMovies?.map((item) => (
          <SwiperSlide key={item?.id}>
            <ContentCard contentData={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default PopularMovies
