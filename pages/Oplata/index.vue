<template>
  <div class="container mt-12">
    <div class="flex gap-2">
      <nuxt-link class="text-primary/50" to="/">Главная</nuxt-link>
      >
      <nuxt-link to="/Oplata">Доставка и оплата</nuxt-link>
    </div>
    <div class="md:flex mt-4 gap-[161px]">
      <h1
        class="md:w-1/2 leading-[65px] text-[28px] md:text-[64px] font-bold text-primary"
      >
        Доставка <br class="max-md:hidden" />
        и оплата
      </h1>
      <div class="md:w-1/2 mt-5">
        <h2 class="text-2xl font-semibold mb-7">Доставка</h2>
        <p class="text-xl leading-[28px] mb-[60px]">
          Мы осуществляем доставку со склада по Москве и Московской области
          собственной курьерской службой. Транспортными компаниями нашу
          продукцию мы доставляем по всей территории РФ, а так же по всем
          странам СНГ.
          <span class="text-blue-700">Сроки доставки: 4—6 недель</span>
        </p>
        <h2 class="text-2xl font-semibold mb-7">Курьерская доставка</h2>
        <p class="text-xl leading-[28px] mb-[60px]">
          БЕСПЛАТНО доставим в приделах МКАД любой заказ
          <span class="text-blue-700">от 5 000 ₽</span>.Заказы свыше
          <span class="text-blue-700"> 30 000 ₽</span> имеют бесплатную
          доставку, включительно 15 км от МКАД
        </p>
        <h2 class="text-2xl font-semibold mb-7">Самовывоз</h2>
        <p class="text-xl leading-[28px] mb-[60px]">
          Любой заказ можно забрать самостоятельно по адресу: г.
          Москва, Дмитровское шоссе д.100с2
        </p>
      </div>
    </div>
  </div>
  <div class="">
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
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
