<template lang="">
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-screen p-4"
    style="display: flex; flex-wrap: wrap; justify-content: center"
  >
    <div v-for="product in products">
      <card :product="product" />
    </div>
  </div>
</template>
<script setup lang="ts">
const { category } = defineProps(["category"]);
console.log("category = ", category);
const uri =
  "https://fakestoreapi.com/products/category/" + category + "?limit=5";
// const { data: products } = await useFetch(
//   "https://fakestoreapi.com/products/1"
// );
console.log("uri = ", uri);
const { data: products } = await useFetch(uri, { key: category });
console.log("data  = ", products);
</script>
<style lang=""></style>
