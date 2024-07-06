<script setup>
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
  {
    title: "Трековые светильники",
    img: "/catalog7.png",
    price: "От 540₽",
  },
  {
    title: "Уличные светильники",
    img: "/catalog8.png",
    price: "От 540₽",
  },
  {
    title: "Технические светильники",
    img: "/catalog9.png",
    price: "От 540₽",
  },
  {
    title: "Светодиодные ленты",
    img: "/catalog10.png",
    price: "От 540₽",
  },
  {
    title: "Комплектуюшие",
    img: "/catalog11.png",
    price: "От 540₽",
  },
]);
</script>
<template>
  <div class="container max-md:mt-10">
    <Path />
    <div class="flex items-center justify-between my-10">
      <h1 class="font-bold text-primary text-[28px] md:text-[40px]">Каталог</h1>
    </div>
    <div class="grid md:grid-cols-6 grid-cols-2 gap-5">
      <div
        v-for="(product, index) in products"
        class="bg-[#F2F2F2] max-md:last:col-span-2 rounded-[20px] p-8 flex flex-col max-md:gap-5"
        :class="index == 9 || index == 10 ? 'md:col-span-3' : 'md:col-span-2'"
      >
        <h1 class="md:text-xl text-base font-medium text-primary">
          {{ product.title }}
        </h1>
        <img
          class="max-md:max-w-[69px] max-md:max-h-[89px] max-w-[159px] md:ml-[250px]"
          :src="product.img"
          alt="product img"
        />
        <p class="flex items-center font-medium text-sm text-primary">
          {{ product.price }} <img src="/right.svg" alt="" />
        </p>
      </div>
    </div>
  </div>
</template>
