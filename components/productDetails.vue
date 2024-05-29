<script setup lang="ts">
const counter = ref(0);
function increment() {
  counter.value++;
}

function decrement() {
  if (counter.value > 0) {
    counter.value--;
  }
}

const { product } = defineProps(["product"]);
const { data: moreProducts } = await useFetch(
  "https://fakestoreapi.com/products?limit=15"
);

function addToCart(productName: string) {
  fetch("https://fakestoreapi.com/carts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 5,
      date: 2020,
      products: [
        { productId: 5, quantity: 1 },
        { productId: 1, quantity: 5 },
      ],
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log("Response JSON:", json);
      alert('"' + productName + '"' + " added  to cart ! ");
      let cart: any = useCookie("cart_product");
      cart.value = productName;
      // handle the response here
    })
    // .then((json) => {
    //   console.log(json);
    //   // handle the response here
    // })
    .catch((error) => {
      console.error("Error:", error);
      alert("Cart  Failed ! ");
    });
}
</script>
<template>
  <div
    class="flex justify-center w-full"
    style="display: flex; justify-content: center"
  >
    <NuxtLink to="/products" class="nav-link">Back</NuxtLink>
    <div class="card mb-3" style="max-width: 50%">
      <div class="row g-0">
        <div class="col-md-4 px-4">
          <img
            :src="product.image"
            class="img-fluid rounded-start"
            alt="Product image"
          />
        </div>

        <div class="col-md-8 px-2" style="border-left: 2px solid grey">
          <span class="badge bg-success">{{ product.category }}</span>
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">${{ product.price }}</p>
            <p class="card-text">Category : {{ product.category }}</p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <div style="display: flex">
              <button
                type="button"
                class="btn btn-primary btn-floating"
                style="
                  border-radius: 50%;
                  height: 30px;
                  width: 30px;
                  display: flex;
                  align-content: center;
                  flex-wrap: wrap;
                  justify-content: center;
                "
                @click="decrement"
              >
                -
              </button>
              <h3 style="margin-left: 10px; margin-right: 10px">
                {{ counter || "-" }}
              </h3>

              <button
                type="button"
                class="btn btn-primary btn-floating"
                style="
                  border-radius: 50%;
                  height: 30px;
                  width: 30px;
                  display: flex;
                  align-content: center;
                  flex-wrap: wrap;
                  justify-content: center;
                "
                @click="increment"
                data-mdb-ripple-init
              >
                +
              </button>
            </div>
          </div>
        </div>
        <h3>About Product</h3>
        <p>{{ product.description }}</p>
      </div>

      <button
        type="button"
        @click="addToCart(product.title)"
        class="btn btn-primary"
      >
        Add to cart
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 16 16"
          style="margin-left: 20px"
        >
          <path
            fill="white"
            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0"
          />
        </svg>
      </button>
    </div>
  </div>
  <h3
    class="my-4"
    style="justify-content: center; text-align: center; font-weight: bold"
  >
    More Related Products
  </h3>
  <relatedProducts :category="product.category" />
  <h3
    class="my-4"
    style="justify-content: center; text-align: center; font-weight: bold"
  >
    More To Shop
  </h3>
  <div style="display: flex; width: 100%; justify-content: center">
    <div
      style="
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        justify-content: center;
        max-width: 60%;
      "
    >
      <div v-for="product in moreProducts">
        <card :product="product" />
      </div>
    </div>
  </div>
</template>

<style></style>
