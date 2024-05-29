<template>
  <div class="card" style="width: 18rem">
    <img
      :src="product.image"
      class="card-img-top"
      style="
        height: 200px;

        object-fit: contain;
      "
      alt="..."
    />
    <div class="card-body">
      <h5
        class="card-title"
        style="
          max-height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        "
      >
        {{ product.title }}
      </h5>
      <p
        class="card-text"
        style="
          max-height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        "
      >
        {{ product.description }}
      </p>
      <NuxtLink :to="`/products/${product.id}`">
        <button type="button" class="btn btn-primary">View</button></NuxtLink
      >
    </div>
  </div>
</template>
<script setup lang="ts">
const { product } = defineProps(["product"]);
let productIdLink = "/products/" + product.id;
</script>
<style></style>
