<script setup lang="ts">
const { data: cart } = await useFetch("https://fakestoreapi.com/carts/5");
let cartData = useCookie("cart_product");
</script>
<template lang="">
  <div>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">cart Details</h1>
      <div class="card bg-white rounded-lg shadow-md p-4">
        <div class="mb-4">
          <h2 class="text-lg font-bold">cart ID: {{ cart.id }}</h2>
          <p class="text-gray-700">User ID: {{ cart.userId }}</p>
          <p class="text-gray-700">Date: {{ cart.date }}</p>
        </div>
        <div v-if="cart.products.length">
          <h3 class="text-lg font-bold mb-2">Products:</h3>
          <ul>
            <li v-for="item in cart.products" :key="item.productId">
              Product ID: {{ item.productId }} - Quantity: {{ item.quantity }}
            </li>
            <li>
              {{ cartData }}
            </li>
          </ul>
        </div>
        <div v-else>
          <p class="text-gray-700">No products in this cart.</p>
        </div>
      </div>
    </div>
  </div>
</template>
