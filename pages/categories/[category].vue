<template lang="">
  <div>
    <div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-screen p-4"
        style="display: flex; flex-wrap: wrap; justify-content: center"
      >
        <div v-for="product in products">
          <card :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const category = route.params.category;
const uri = "https://fakestoreapi.com/products/category/" + category;
const { data: products } = await useFetch(uri, { key: category });
</script>
<style lang=""></style>
