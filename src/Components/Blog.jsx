import React from "react";
import { Navigation, Pagination, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import profile from "../assets/profile.jpg";
import "swiper/css";
import "swiper/css/effect-creative";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Swiper.css";

const Blog = () => {
  return (
    <div>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Navigation, Pagination, EffectCreative]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className=" flex flex-col items-center justify-center py-20 bg-primary">
          <div className=" h-28 rounded-full overflow-hidden mb-6">
            <img src={profile} alt="" className=" h-32 object-center" />
          </div>
          <div className=" text-center text-white">
            <h1 className=" font-bold text-xl mb-4">William Smith</h1>
            <p className=" w-[50%] mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              quibusdam architecto officiis perferendis, facere esse sunt!
              Iusto, saepe, aliquid eveniet dolore voluptatibus veniam
              repudiandae nisi, minus tempora magnam ratione maiores.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex flex-col items-center justify-center py-20 bg-slate-200">
          <div className=" h-28 rounded-full overflow-hidden mb-6">
            <img src={profile} alt="" className=" h-32 object-center" />
          </div>
          <div className=" text-center">
            <h1 className=" font-bold text-xl mb-4">William Smith</h1>
            <p className=" w-[50%] mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              quibusdam architecto officiis perferendis, facere esse sunt!
              Iusto, saepe, aliquid eveniet dolore voluptatibus veniam
              repudiandae nisi, minus tempora magnam ratione maiores.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex flex-col items-center justify-center py-20 bg-primary">
          <div className=" h-28 rounded-full overflow-hidden mb-6">
            <img src={profile} alt="" className=" h-32 object-center" />
          </div>
          <div className=" text-center text-slate-50">
            <h1 className=" font-bold text-xl mb-4">William Smith</h1>
            <p className=" w-[50%] mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              quibusdam architecto officiis perferendis, facere esse sunt!
              Iusto, saepe, aliquid eveniet dolore voluptatibus veniam
              repudiandae nisi, minus tempora magnam ratione maiores.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" flex flex-col items-center justify-center py-20 bg-slate-200">
          <div className=" h-28 rounded-full overflow-hidden mb-6">
            <img src={profile} alt="" className=" h-32 object-center" />
          </div>
          <div className=" text-center">
            <h1 className=" font-bold text-xl mb-4">William Smith</h1>
            <p className=" w-[50%] mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              quibusdam architecto officiis perferendis, facere esse sunt!
              Iusto, saepe, aliquid eveniet dolore voluptatibus veniam
              repudiandae nisi, minus tempora magnam ratione maiores.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Blog;
