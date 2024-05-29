<template>
  <div>
    <h1 class="display-4 text-center mb-5">Welcome to the Store</h1>

    <div>
      <h3 class="text-center mb-4">Shop By Category</h3>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-screen p-4"
        style="display: flex; flex-wrap: wrap; justify-content: center"
      >
        <div v-for="category in Categories" :key="category">
          <categoriesCard :category="category" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: Categories } = await useFetch(
  "https://fakestoreapi.com/products/categories"
);
</script>

<style>
/* You can add any custom styles here if needed */
</style>
