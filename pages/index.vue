<script setup></script>
<template>
  <HomeCarousel />
  <HomeCatalog />
  <HomeWhyNornlight />
  <div class="container mt-10 flex items-center justify-between mb-10">
    <h1 class="font-bold text-primary text-[28px] md:text-[40px]">
      Популярные товары
    </h1>
    <nuxt-link
      to="/Popular"
      class="btn btn-one hidden md:flex items-center rounded-full gap-[10px] py-4 px-12"
    >
      <span>Все товары</span> <img src="/right.svg" alt="" />
    </nuxt-link>
  </div>
  <HomePopularProduct />
  <HomeBrend />
  <HomeBlog />
  <HomeProduction />
</template>

<style lang="scss" scoped></style>
