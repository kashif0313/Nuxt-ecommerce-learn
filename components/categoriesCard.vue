<template>
  <div class="card" style="width: 18rem">
    <img
      :src="products[0].image"
      class="card-img-top"
      style="
        height: 200px;

        object-fit: contain;
      "
      alt="..."
    />
    <div class="card-body">
      <h5>
        {{ category }}
      </h5>
      <p class="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <NuxtLink :to="`/categories/${category}`"
        ><button type="button" class="btn btn-primary">View</button></NuxtLink
      >
    </div>
  </div>
</template>
<script setup lang="ts">
const { category } = defineProps(["category"]);

const uri = "https://fakestoreapi.com/products/category/" + category;
const { data: products } = await useFetch(uri, { key: category });
</script>
<style lang=""></style>
