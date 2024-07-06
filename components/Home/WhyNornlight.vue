<script setup>
const company = reactive([
  {
    icon: "/Norn_icon1.svg",
    title: "Только проверенные бренды",
    info: "Бренды, проверенные временем и качеством",
  },
  {
    icon: "/Norn_icon2.svg",
    title: "Самые низкие цены",
    info: "Ниже не будет нигде",
  },
  {
    icon: "/Norn_icon3.svg",
    title: "Быстрая доствка",
    info: "Доставляем по всей РФ за 1-10 дней",
  },
  {
    icon: "/Norn_icon4.svg",
    title: "Большой ассортимент",
    info: "Более 1000 товаров",
  },
]);
</script>
<template>
  <div class="container mt-10">
    <div class="flex items-center justify-between mb-10">
      <h1 class="font-bold text-primary text-[28px] md:text-[40px]">
        Почему NORNLIGHT?
      </h1>
      <nuxt-link
        to="/"
        class="btn btn-one hidden md:flex items-center rounded-full gap-[10px] py-4 px-12"
      >
        <span>О компании</span> <img src="/right.svg" alt="" />
      </nuxt-link>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
      <div v-for="(com, index) in company" class="border p-4 md:p-10">
        <div>
          <img
            class="bg-primary p-[10px] rounded-xl md:w-20 w-10 md:h-20 h-10 md:mb-20 mb-[10px]"
            :src="com.icon"
            alt=""
          />

          <h2
            :class="
              index == 0
                ? 'md:w-[214px] max-md:[50px]'
                : 'max-w-[180px] max-md:[50px]'
            "
            class="text-base md:text-xl font-bold text-primary"
          >
            {{ com.title }}
          </h2>
          <p
            class="text-primary/50 max-md:text-sm md:mt-5 mt-3 max-w-[90px] md:max-w-[200px]"
          >
            {{ com.info }}
          </p>
        </div>
      </div>
    </div>
    <nuxt-link
      to="/"
      class="border border-primary md:hidden flex items-center rounded-full gap-[10px] py-4 px-28 mt-8"
    >
      <span>О компании</span> <img src="/right.svg" alt="" />
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
