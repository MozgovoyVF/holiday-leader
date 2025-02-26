import React, { useRef } from "react";
import styles from "./index.module.scss";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

interface ISwiperSlider {
  id: string;
  data: string[];
  sliderPerView: number;
  onChange: (value: string) => void;
  selectedValue: string;
}

export function SwiperSlider({ data, sliderPerView, onChange, selectedValue, id }: ISwiperSlider) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  return (
    <div id={id} className={styles.slider}>
      <Swiper
        spaceBetween={10} // Расстояние между изображениями
        slidesPerView={sliderPerView}
        slidesPerGroup={sliderPerView}
        loop={true} // Бесконечный цикл слайдов
        modules={[Navigation, Pagination]} // Подключаем модули
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className={styles.mySwiper}
        breakpoints={{
          320: {
            slidesPerView: sliderPerView, // 1 слайд для экранов меньше 640px
          },
          480: {
            slidesPerView: sliderPerView + 1, // 2 слайда для экранов 640px и выше
          },
          680: {
            slidesPerView: sliderPerView + 2, // 3 слайда для экранов 768px и выше
          },
          1024: {
            slidesPerView: sliderPerView + 3, // 4 слайда для экранов 1024px и выше
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide className={styles.swipItem} onClick={() => onChange(item)} key={index}>
            <div className={`${styles.item} ${item === selectedValue ? styles.active : ""}`}> {item}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.buttons}>
        <button type="button" className={styles.next} onClick={() => swiperRef.current?.slidePrev()}>
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button type="button" className={styles.next} onClick={() => swiperRef.current?.slideNext()}>
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}
