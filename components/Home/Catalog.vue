<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

const products = reactive([
  {
    title: "Люстры",
    img: "/catalog1.png",
    price: "От 540₽",
  },
  {
    title: "Светильники",
    img: "/catalog2.png",
    price: "От 540₽",
  },
  {
    title: "Бра",
    img: "/catalog3.png",
    price: "От 540₽",
  },
  {
    title: "Торшеры",

    img: "/catalog4.png",
    price: "От 540₽",
  },
  {
    title: "Настольные лампы",
    img: "/catalog5.png",
    price: "От 540₽",
  },
  {
    title: "Споты",
    img: "/catalog6.png",
    price: "От 540₽",
  },
]);
</script>
<template>
  <div class="container max-md:mt-40">
    <div class="flex items-center justify-between mb-10">
      <h1 class="font-bold text-primary text-[28px] md:text-[40px]">Каталог</h1>

      <nuxt-link
        to="/catalog"
        class="btn btn-one hidden md:flex items-center rounded-full gap-[10px] py-4 px-12"
      >
        <span>Весь каталог</span> <img src="/right.svg" alt="" />
      </nuxt-link>
    </div>
    <div class="hidden md:grid md:grid-cols-3 gap-5">
      <div
        v-for="product in products"
        class="bg-[#F2F2F2] rounded-[20px] p-8 flex justify-between"
      >
        <div class="flex flex-col gap-[180px]">
          <h1 class="text-xl font-medium text-primary">{{ product.title }}</h1>
          <p class="flex items-center gap-3 font-medium text-sm text-primary">
            {{ product.price }} <img src="/right.svg" alt="" />
          </p>
        </div>
        <img :src="product.img" alt="product img" />
      </div>
    </div>
    <div class="md:hidden">
      <swiper
        :watchSlidesProgress="true"
        :loop="true"
        :slidesPerView="2"
        :autoplay="true"
        :pagination="{
          clickable: true,
        }"
        class="mySwiper"
      >
        <swiper-slide
          v-for="(product, index) in products"
          key="index"
          class="p-5 mx-[1px]"
        >
          <div class="flex flex-col gap-[100px]">
            <h1
              :class="index !== 4 ? 'text-base' : 'text-[9px]'"
              class="font-medium text-primary leading-[17px]"
            >
              {{ product.title }}
            </h1>
            <p class="flex items-center gap-3 font-medium text-sm text-primary">
              {{ product.price }} <img src="/right.svg" alt="" />
            </p>
          </div>
          <img class="max-w-[55px]" :src="product.img" alt="product img" />
        </swiper-slide>
      </swiper>
    </div>
    <nuxt-link
      to="/catalog"
      class="border mt-8 border-primary flex md:hidden items-center rounded-full gap-[10px] py-4 px-[100px]"
    >
      <span>Весь каталог</span> <img src="/right.svg" alt="" />
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
// ========================
//       BUTTON ONE
// ========================

.btn-one {
  color: #454545;
  transition: all 0.3s;
  position: relative;
}
.btn-one span {
  transition: all 0.3s;
}
.btn-one::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: #454545;
  border-bottom-color: #454545;
  transform: scale(0.1, 1);
}
.btn-one:hover span {
  letter-spacing: 2px;
}
.btn-one:hover::before {
  opacity: 1;
  transform: scale(1, 1);
}
.btn-one::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.3s;
  background-color: #45454532;
  border-radius: 50px;
}
.btn-one:hover::after {
  opacity: 0;
  transform: scale(0.1, 1);
}
</style>
