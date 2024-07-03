<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
<template>
  <div
    class="slide flex justify-between items-center mt-5 mb-20 md:w-[1714] w-[400px]"
  >
    <div class="md:w-[1800px] w-[370px] lg:h-[500px] h-[150px]">
      <swiper
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper object-cover"
      >
        <swiper-slide data-hash="slide1" class="">
          <div class="md:flex flex-col container justify-between">
            <h1
              class="text-primary md:text-6xl text-xl font-bold w-[450px] leading-[87.42px] text-left"
            >
              Скидка 15% на все подвесные светильники
              <span class="bg-primary text-white rounded-full px-5 py-3">
                до 5 февраля</span
              >
            </h1>
            <img class="max-md:w-[275px]" src="/intro_img.png" alt="" />
            <!-- <img class="max-md:w-[275px]" src="/intro_mobile.svg" alt="" /> -->
          </div>
        </swiper-slide>
        <swiper-slide data-hash="slide2" class="">
          <div class="md:flex flex-col container justify-between">
            <h1
              class="text-primary md:text-6xl text-xl font-bold w-[450px] leading-[87.42px] text-left"
            >
              Скидка 15% на все подвесные светильники
              <span class="bg-primary text-white rounded-full px-5 py-3">
                до 5 февраля</span
              >
            </h1>
            <img class="max-md:w-[275px]" src="/intro_img.png" alt="" />
            <!-- <img class="max-md:w-[275px]" src="/intro_mobile.svg" alt="" /> -->
          </div>
        </swiper-slide>
        <swiper-slide data-hash="slide3" class="">
          <div class="md:flex flex-col container justify-between">
            <h1
              class="text-primary md:text-6xl text-xl font-bold w-[450px] leading-[87.42px] text-left"
            >
              Скидка 15% на все подвесные светильники
              <span class="bg-primary text-white rounded-full px-5 py-3">
                до 5 февраля</span
              >
            </h1>
            <img class="max-md:w-[275px]" src="/intro_img.png" alt="" />
            <!-- <img class="max-md:w-[275px]" src="/intro_mobile.svg" alt="" /> -->
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.slide {
  width: 1900px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #f2f2f2;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
