<script setup>
import { ref, onMounted } from "vue";

const api = "https://6683b4784102471fa4cb06d1.mockapi.io/products";
const products = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched data:", data); // API dan kelayotgan ma'lumotni konsolga chiqarish
    products.value = data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<template>
  <div class="container mt-16">
    <div v-if="products.length" class="grid grid-cols-2 md:grid-cols-4">
      <div v-for="product in products" :key="product.id" class="p-7 relative">
        <nuxt-link :to="{ path: `/popular/${product.id}` }">
          <button class="absolute right-10 top-10">
            <img src="/like.svg" alt=" product img" />
          </button>
          <img :src="product.photo" alt="" />
          <h1 class="md:text-xl text-base font-medium text-primary mt-8">
            {{ product.title }}
          </h1>
          <p class="text-[#9F9F9F] text-xs font-medium line-through mt-6">
            {{ product.discountPercentage }}
          </p>
          <div class="flex items-center max-md:gap-[13px] justify-between mt-2">
            <p class="text-xl font-bold text-primary">{{ product.price }}₽</p>
            <button>
              <svg
                class="bg-primary w-[55px] h-[33px] py-2 rounded-full"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4444 13.4444C12.4626 13.4444 11.6667 14.2404 11.6667 15.2222C11.6667 16.2041 12.4626 17 13.4444 17C14.4263 17 15.2222 16.2041 15.2222 15.2222C15.2222 14.2404 14.4263 13.4444 13.4444 13.4444ZM13.4444 13.4444L7.22222 13.4444C6.64511 13.4772 6.07298 13.3215 5.59202 13.0009C5.11106 12.6802 4.74731 12.212 4.55556 11.6667L2.77778 1H1M13.4444 13.4444C14.0215 13.4772 14.5937 13.3215 15.0746 13.0009C15.5556 12.6802 15.9194 12.212 16.1111 11.6667L17 5.44444H3.48889M8.11111 15.2222C8.11111 16.2041 7.31517 17 6.33333 17C5.35149 17 4.55555 16.2041 4.55555 15.2222C4.55555 14.2404 5.35149 13.4444 6.33333 13.4444C7.31517 13.4444 8.11111 14.2404 8.11111 15.2222Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<style lang="scss">
// Your styles here
</style>
