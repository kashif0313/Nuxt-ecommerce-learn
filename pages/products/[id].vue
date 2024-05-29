<template lang="">
  <div style="margin-top: 20px">
    <productDetails :product="product" />
    <!-- {{ product }} -->
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
const uri = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch(uri, { key: id });
</script>
<style lang=""></style>
