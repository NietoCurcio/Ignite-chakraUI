import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import styles from './styles.module.css'
import { CarouselItem } from './CarouselItem'

interface ContinentsObject {
  slug: string
  description: string
  continentName: string
  imageUrl: string
}
interface CarouselProps {
  carouselData: ContinentsObject[]
}

export function Carousel({ carouselData }: CarouselProps) {
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
      {carouselData.map((item: ContinentsObject, idx: number) => {
        return (
          <SwiperSlide key={idx}>
            <CarouselItem
              img={item.imageUrl}
              title={item.continentName}
              subtitle={item.description}
              to={`/${item.slug}`}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
