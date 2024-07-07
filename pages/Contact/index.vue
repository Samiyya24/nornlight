<script setup></script>
<template>
  <div class="container md:mt-12">
    <div class="flex gap-2">
      <nuxt-link class="text-primary/50" to="/">Главная</nuxt-link> >
      <nuxt-link to="/Contact">Контакты</nuxt-link>
    </div>
    <div class="flex items-center md:mb-[53px] justify-between">
      <h1 class="text-[64px] font-bold text-primary">Контакты</h1>
      <div class="flex flex-col">
        <a class="text-2xl font-semibold text-primary" href="tel:+8(800)8904656"
          >8 (800) 890-46-56</a
        >
        <span class="text-primary w-[200px]">Пн-Пт: 10:00 до 19:00 </span>
        <span> Сб-Вс: заказ через корзину </span>
        <span>Телефоны: </span>
      </div>
    </div>
  </div>
  <div class="relative">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29411.935806210353!2d69.24271708537113!3d41.30889143708973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1720286102303!5m2!1sen!2s"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="w-full md:h-[672px]"
    >
    </iframe>
    <div
      class="flex bg-white left-1/2 -translate-x-1/2 bottom-8 mx-auto absolute justify-between items-center text-primary py-14 px-16 rounded-2xl container"
    >
      <div>
        <h3 class="text-2xl font-semibold">Адрес магазина</h3>
        <span>г. Москва, Дмитровское шоссе д.100с2</span>
      </div>
      <div>
        <h3 class="text-2xl font-semibold">Почта</h3>
        <p>NORNLIGHT@mail.ru</p>
      </div>
      <div>
        <h3 class="text-2xl font-semibold">Телефон</h3>
        <a href="tel:+8(800)8904656">8 (800) 890-46-56</a>
      </div>
      <button class="bg-primary text-white py-[14px] px-[43px] rounded-full">
        Оставить заявку
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
