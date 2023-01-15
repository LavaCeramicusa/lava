import { A11y, Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { personnels } from 'data';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500 }}
    >
      {personnels.map((personnel, index) => {
        return (
          <SwiperSlide
            key={index}
            className='w-full flex shrink-0 flex-col justify-center items-center py-20 xl:px-60 text-center transition-all'
          >
            <img
              src={personnel.image}
              className='inline-block w-56 h-56 sm:w-96 sm:h-96 rounded-full'
            />
            <h4 className='font-extrabold text-5xl mt-4 text-primary'>
              {personnel.name}
            </h4>
            <span className='inline-block mb-5 mt-1 text-2xl'>
              {personnel.position}
            </span>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
