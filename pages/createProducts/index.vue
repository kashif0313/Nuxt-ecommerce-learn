<script setup lang="ts">
import { reactive } from "vue";

const product = reactive({
  title: undefined,
  price: undefined,
  discription: undefined,
});

function saveProduct() {
  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log("Response JSON:", json);
      alert("Product Added Successfully ! ");
      // handle the response here
    })

    .catch((error) => {
      console.error("Error:", error);
      alert("product Failed to add ! ");
    });
}
</script>
<template>
  <div>
    <div class="card-body">
      <div
        style="
          justify-content: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        "
      >
        <h1>Product Create Page</h1>
        <form
          class="row g-3"
          @submit.prevent="saveProduct"
          style="display: flex; max-width: 60%"
        >
          <div class="col-md-6">
            <label for="inputTitle4" class="form-label">title</label>
            <input
              type="text"
              v-model="product.title"
              class="form-control"
              id="inputTitle4"
              placeholder="Type title"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="inputPrice4" class="form-label">price</label>
            <input
              type="number"
              v-model="product.price"
              class="form-control"
              id="inputPrice4"
              placeholder="Type price"
              required
            />
          </div>

          <div class="col-12">
            <label for="inputDiscription" class="form-label"
              >Discription
            </label>
            <textarea
              type="text"
              v-model="product.discription"
              class="form-control"
              id="inputDiscription"
              placeholder="This is new product"
            />
          </div>

          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div
            class="col-12"
            style="display: flex; width: 100%; justify-content: space-between"
          >
            <NuxtLink to="/products" class="btn btn-danger">Back</NuxtLink>
            <button type="submit" class="btn btn-primary">Create</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
