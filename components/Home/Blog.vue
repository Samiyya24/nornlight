<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

const api = "https://6683b4784102471fa4cb06d1.mockapi.io/Blog";
const blogs = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    blogs.value = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
</script>

<template>
  <div class="container">
    <div class="flex items-center justify-between mb-10">
      <h1 class="font-bold text-primary text-[28px] md:text-[40px]">Блог</h1>
      <nuxt-link
        to="/blog"
        class="btn btn-one hidden md:flex items-center rounded-full gap-[10px] py-4 px-12"
      >
        <span>Перейти в блог</span> <img src="/right.svg" alt="" />
      </nuxt-link>
    </div>
    <div class="grid md:grid-cols-3 gap-5 max-md:hidden">
      <div
        v-for="(blog, index) in blogs.slice(0, 3)"
        :key="blog.id"
        class="border-b border-b-primary/10"
      >
        <img class="rounded-xl" :src="blog.avatar" alt="" />
        <div class="flex items-center justify-between mt-7">
          <h3 class="text-xl font-bold text-primary">{{ blog.name }}</h3>
          <img class="mr-10" src="/public/topRight.svg" alt="" />
        </div>
        <p class="text-sm font-medium text-primary py-6">
          {{ formatDate(blog.createdAt) }}
        </p>
      </div>
    </div>

    <div class="md:hidden">
      <swiper
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper object-cover"
      >
        <swiper-slide
          v-for="(blog, index) in blogs.slice(0, 3)"
          :key="blog.id"
          class="border-b border-b-primary/10"
        >
          <div class="text-left">
            <img class="rounded-xl" :src="blog.avatar" alt="" />
            <div class="flex items-center justify-between mt-7">
              <h3 class="text-xl font-bold text-primary max-w-[253px]">
                {{ blog.name }}
              </h3>
              <img class="mr-10" src="/public/topRight.svg" alt="" />
            </div>
            <p class="text-sm font-medium text-primary py-6">
              {{ formatDate(blog.createdAt) }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <nuxt-link
      to="/blog"
      class="border mt-8 border-primary flex md:hidden items-center rounded-full gap-[10px] py-4 px-[100px]"
    >
      <span>Перейти в блог</span> <img src="/right.svg" alt="" />
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.swiper-slide {
  background-color: white;
  border-radius: 0%;
}
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
