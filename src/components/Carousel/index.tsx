import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import styles from './styles.module.css'
import { CarouselItem } from './CarouselItem'

export function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Keyboard, Pagination, Navigation]}
      className={styles.swiper}
    >
      <SwiperSlide>
        <CarouselItem
          img="/images/continents/europe.png"
          title="Europa"
          subtitle="O continente mais antigo"
          to="/europe"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          img="/images/continents/europe.png"
          title="América do Norte"
          subtitle=""
          to="/north-america"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          img="/images/continents/europe.png"
          title="América do Sul"
          subtitle=""
          to="/south-america"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          img="/images/continents/europe.png"
          title="Oceania"
          subtitle="O maior continente"
          to="/south-america"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          img="/images/continents/europe.png"
          title="África"
          subtitle="O maior continente"
          to="/south-america"
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          img="/images/continents/europe.png"
          title="Ásia"
          subtitle="O maior continente"
          to="/south-america"
        />
      </SwiperSlide>
    </Swiper>
  )
}
