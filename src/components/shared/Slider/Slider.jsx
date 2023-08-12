'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
const Slider = ({ popularMovies }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="w-full"
    >
      {popularMovies?.map((item) => (
        <SwiperSlide key={item?.id}>
          <div
            style={{
              backgroundImage: `url(
                https://image.tmdb.org/t/p/original${item?.poster_path}
              )`,
              backgroundPosition: 'center',
            }}
            className="h-[460px] bg-no-repeat bg-cover rounded-lg"
          >
            <div className="text-white h-full flex flex-col justify-end p-5 bg-black bg-opacity-60 rounded-lg">
              <h2 className="text-3xl lg:text-5xl mb-3">
                {item?.original_title}
              </h2>
              <p>Popularity: {item?.popularity?.toFixed(2)}</p>
              <p>Release Date: {item?.release_date}</p>
              <p>Vote: {item?.vote_average}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider
