<script setup></script>
<template>
  <div class="bg-[#F2F2F2] py-20 mt-14">
    <div class="container md:flex justify-between">
      <div class="flex flex-col">
        <nuxt-link class="mb-12 max-w-[150px]" to="/">
          <img src="/logo.svg" alt="logo" />
        </nuxt-link>
        <span>
          <a
            class="mt-9 text-primary md:text-2xl text-base font-medium"
            href="tel:+8 (800) 890-46-56"
            >8 (800) 890-46-56</a
          >
        </span>
        <img
          class="mt-9 max-w-[136px] md:max-w-[222px]"
          src="/public/cards.svg"
          alt=""
        />
        <p class="mt-9 text-primary/50 underline">Политика конфидециальности</p>
        <p class="mt-9 text-primary/50 underline">
          Пользовательское соглашение
        </p>
        <div class="mt-9 flex gap-3">
          <img src="/public/VK.png" alt="" />
          <img src="/public/VK.png" alt="" />
          <img src="/public/VK.png" alt="" />
        </div>
      </div>
      <div>
        <h2 class="text-2xl font-bold mb-7 max-md:mt-5">Покупателям</h2>
        <ul>
          <li><nuxt-link to="">О компании</nuxt-link></li>
          <li><nuxt-link to="">Доставка и оплата</nuxt-link></li>
          <li><nuxt-link to="">Возврат</nuxt-link></li>
          <li><nuxt-link to="">Гарантии</nuxt-link></li>
          <li><nuxt-link to="">Контакты</nuxt-link></li>
          <li><nuxt-link to="">Блог</nuxt-link></li>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-bold mb-7">Товары</h2>
        <ul>
          <li><nuxt-link to="">Люстры</nuxt-link></li>
          <li><nuxt-link to="">Светильники</nuxt-link></li>
          <li><nuxt-link to="">Бра</nuxt-link></li>
          <li><nuxt-link to="">Торшеры</nuxt-link></li>
          <li><nuxt-link to="">Комплектуюшие</nuxt-link></li>
          <li><nuxt-link to="">Настольные лампы</nuxt-link></li>
        </ul>
      </div>
      <div>
        <ul class="md:mt-14">
          <li><nuxt-link to="">Споты</nuxt-link></li>
          <li><nuxt-link to="">Трековые светильники</nuxt-link></li>
          <li><nuxt-link to="">Уличные светильники</nuxt-link></li>
          <li><nuxt-link to="">Технические светильники</nuxt-link></li>
          <li><nuxt-link to="">Светодиодные ленты</nuxt-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
  font-size: 16px;
  font-weight: 600;
  color: #4545459c;
}
ul li {
  margin-bottom: 27px;
}
</style>
