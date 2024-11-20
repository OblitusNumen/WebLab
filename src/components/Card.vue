<script setup>
import { defineProps, inject } from 'vue';

// Inject the cart reference from the parent or global provider
const headerRef = inject('headerRef');

// Define the props the component will accept
const props = defineProps({
  obj: {
    type: Object,
    required: true,
  },
});

// Function to add the item to the cart
function addToCart() {
    headerRef.value.getCart().push({id: props.obj.id, count: 1});
}
</script>

<template>
  <div class="box">
    <img :draggable="false" :src="'/src/assets' + props.obj.path_to_image" alt="Изображение товара" height="120"
         width="120" />
    <div class="content">
      <strong>{{ props.obj.label }}</strong><br />
      {{ props.obj.price }} Руб.
    </div>
    <!-- Add to Cart Button -->
    <button class="add-to-cart-btn" @click="addToCart">Добавить в корзину</button>
  </div>
</template>

<style scoped>
.content {
  flex-grow: 1; /* Ensures content takes available space */
}

.add-to-cart-btn {
  margin: 10px;
  width: 60%;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
}

.add-to-cart-btn:hover {
  background-color: #4682B4; /* Slightly darker blue on hover */
}
</style>
