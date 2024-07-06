<script setup>
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
    <div class="flex gap-3">
      <nuxt-link class="text-primary/50" to="/">Главная</nuxt-link> >
      <nuxt-link to="/blog">Блог</nuxt-link>
    </div>
    <div class="flex items-center justify-between mt-10 mb-10">
      <h1 class="font-bold text-primary text-[28px] md:text-[40px]">Блог</h1>
    </div>
    <div class="grid md:grid-cols-3 gap-5">
      <div
        v-for="(blog, index) in blogs"
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
  </div>
</template>
