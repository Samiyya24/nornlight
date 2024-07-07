<script setup>
import { ref } from "vue";
import PhoneModal from "../components/Home/phone_modal.vue";

const showModal = ref(false);
const showInput = ref(true);
const showSidebar = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
  showInput.value = !showInput.value;
};

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
  showInput.value = !showInput.value;
};
</script>

<template>
  <div
    class="container md:flex hidden items-center justify-between py-3 text-sm"
  >
    <nav>
      <ul class="flex gap-7 text-primary/50 font-semibold">
        <li>
          <nuxt-link class="hover:text-primary" to="/aboutcompany"
            >О компании</nuxt-link
          >
        </li>
        <li>
          <nuxt-link class="hover:text-primary" to="/Oplata"
            >Доставка и оплата</nuxt-link
          >
        </li>
        <li>
          <nuxt-link class="hover:text-primary" to="/return">Возврат</nuxt-link>
        </li>
        <li>
          <nuxt-link class="hover:text-primary" to="/Warranty"
            >Гарантии</nuxt-link
          >
        </li>
        <li>
          <nuxt-link class="hover:text-primary" to="/Contact"
            >Контакты</nuxt-link
          >
        </li>
        <li>
          <nuxt-link class="hover:text-primary" to="/blog">Блог</nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="flex gap-6">
      <a class="text-primary text-sm" href="tel:+8 (800) 890-46-56"
        >8 (800) 890-46-56</a
      >
      <button class="text-primary/50 font-semibold" @click="toggleModal">
        Заказать звонок
      </button>
    </div>
  </div>
  <div class="sticky top-0 left-0 bg-white/80 z-30 pt-3 pb-6">
    <div class="flex items-center justify-between mt-6 container">
      <div class="flex gap-5">
        <nuxt-link to="/">
          <img
            @click="toggleSidebar"
            class="md:hidden"
            :src="showSidebar ? '/close.svg' : '/burger.svg'"
            alt=""
          />
        </nuxt-link>
        <nuxt-link to="/">
          <img
            v-if="showInput"
            class="max-md:w-40 md:-ml-6"
            src="/logo.svg"
            alt=""
          />
        </nuxt-link>
      </div>
      <nuxt-link
        to=""
        class="bg-primary py-3 md:flex hidden px-7 rounded-full text-white gap-2"
      >
        <img src="/catalog.svg" alt="icon" />Каталог</nuxt-link
      >
      <form action="" class="relative md:block hidden">
        <input
          class="border py-3 rounded-full border-primary outline-none px-6 pr-12 w-[800px]"
          type="text"
          placeholder="Поиск по товарам"
          name=""
          id=""
        />
        <img class="absolute right-5 top-4" src="/search.svg" alt="" />
      </form>
      <div class="flex items-center gap-8">
        <div class="flex flex-col items-center">
          <img src="/like.svg" alt="" />
          <p class="md:block hidden">Избранное</p>
        </div>
        <img v-if="showModal" src="/reyting.svg" alt="" />
        <div class="md:flex hidden flex-col items-center">
          <img v-if="showInput" src="/reyting.svg" alt="" />
          <p>Сравнение</p>
        </div>
        <div class="flex flex-col items-center">
          <img src="/cart.svg" alt="" />
          <p class="md:block hidden">Корзина <span></span></p>
        </div>
      </div>
    </div>
  </div>

  <form action="" class="container relative mt-5 block md:hidden">
    <input
      class="border py-3 rounded-full border-primary outline-none px-6 pr-12 w-[378px]"
      type="text"
      placeholder="Поиск по товарам"
      name=""
      id=""
    />
    <img class="absolute right-10 top-4" src="/search.svg" alt="" />
  </form>
  <div
    v-if="showSidebar"
    @click="toggleSidebar"
    class="container modal_mobile mt-10"
  >
    <div
      class="justify-between py-3 text-sm z-50 fixed bg-white top-14 w-full"
      v-if="showSidebar"
    >
      <nav>
        <ul
          class="flex flex-col items-center gap-7 text-primary font-semibold border-t"
        >
          <li class="border-b py-4 w-full text-center">
            <nuxt-link to="/aboutcompany">О компании</nuxt-link>
          </li>
          <li class="cursor-pointer border-b py-4 w-full text-center">
            <nuxt-link to="/oplata">Доставка и оплата</nuxt-link>
          </li>
          <li class="cursor-pointer border-b py-4 w-full text-center">
            <nuxt-link to="/return">Возврат</nuxt-link>
          </li>
          <li class="cursor-pointer border-b py-4 w-full text-center">
            <nuxt-link to="/Warranty">Гарантии</nuxt-link>
          </li>
          <li class="cursor-pointer border-b py-4 w-full text-center">
            <nuxt-link to="/contact">Контакты</nuxt-link>
          </li>
          <li class="cursor-pointer border-b py-4 w-full text-center">
            <nuxt-link to="/blog">Блог</nuxt-link>
          </li>
        </ul>
      </nav>
      <nuxt-link
        to=""
        class="bg-primary py-3 items-center px-40 mt-7 flex rounded-full text-white gap-2 w-[370px] mx-auto"
      >
        <img src="/catalog.svg" alt="icon" />Каталог</nuxt-link
      >
      <div class="flex flex-col items-center gap-3 mt-8">
        <a class="text-primary text-sm" href="tel:+8 (800) 890-46-56"
          >8 (800) 890-46-56</a
        >
        <button class="text-primary font-semibold" @click="toggleModal">
          Заказать звонок
        </button>
      </div>
    </div>
  </div>
  <div v-if="showModal" class="modal-overlay" @click.self="toggleModal">
    <PhoneModal @close="toggleModal" />
  </div>
</template>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.modal_mobile {
  position: fixed;
  top: 2.5%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

ul li {
  position: relative;
  transition: color 0.3s ease;
}

ul li::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: width 0.3s ease;
}

ul li:hover::before {
  width: 100%;
  transition: width 0.3s ease;
}

button {
  position: relative;
  transition: color 0.3s ease;
}

button::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: width 0.3s ease;
}

button:hover::before {
  width: 100%;
  transition: width 0.3s ease;
}
</style>
