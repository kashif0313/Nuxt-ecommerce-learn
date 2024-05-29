<template lang="">
  <div>
    <div
      style="
        display: flex;
        justify-content: space-between;
        padding: 10px 30px;
        align-items: baseline;
      "
    >
      <NuxtLink
        to="/createProducts"
        class="btn btn-primary"
        style="margin: 10px 15px"
      >
        Create New Product
      </NuxtLink>
      <div style="display: flex">
        <div style="display: flex; flex-shrink: no-shrink; margin-right: 10px">
          No of products
        </div>
        <div>
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            @change="onValueChange($event)"
          >
            <option value="5" selected>5</option>
            <option value="10">10</option>
            <option value="30">30</option>
          </select>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-screen p-4"
      style="display: flex; flex-wrap: wrap; justify-content: center"
    >
      <div v-for="product in products">
        <card :product="product" />
      </div>
    </div>
  </div>
</template>
<script setup>
const uri = ref("https://fakestoreapi.com/products?limit=5");
const products = ref([]);

async function fetchProducts() {
  const { data } = await useFetch(uri.value);
  products.value = data.value;
}

function onValueChange(event) {
  const limit = event.target.value;
  uri.value = `https://fakestoreapi.com/products?limit=${limit}`;
  fetchProducts();
}

// Fetch initial products
fetchProducts();
</script>
<style lang=""></style>
