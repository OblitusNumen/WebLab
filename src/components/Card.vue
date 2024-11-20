<script setup>
import {defineProps, inject, onMounted, ref} from 'vue';
import {request} from "@/utils/fetch.js";
import {getUserEmail} from "@/utils/utils.js";

// Define the props the component will accept
const props = defineProps({
  obj: {
    type: Object,
    required: true,
  },
});

// Inject the headerRef provided by App.vue
const headerRef = inject('headerRef');

const authorized = ref(false)

onMounted(async () => {
  authorized.value = await getUserEmail() != null
})

// Function to add the item to the cart
const addToCart = async () => {
  const item = {
    id: props.obj.id,
    count: 1
  }
  const cart = await request("/catalog/cart", 'GET');
  const existingItem = cart.contents.find(cartItem => cartItem.id === item.id);
  if (existingItem) {
    existingItem.count += item.count;
  } else {
    cart.contents.push(item);
  }

  // Optionally update the server with the new cart
  await request("/catalog/updcart", 'POST', cart);
  await headerRef.value.countCart()
};
</script>

<template>
  <div class="box">
    <img :draggable="false" :src="'/src/assets' + props.obj.path_to_image" alt="Изображение товара" height="120"
         width="120"/>
    <div class="content">
      <strong>{{ props.obj.label }}</strong><br/>
      <div class="price">{{ props.obj.price }} Руб.</div>
    </div>
    <!-- Add to Cart Button -->
    <button v-if="authorized" class="add-to-cart-btn" @click="addToCart">Добавить в корзину</button>
  </div>
</template>

<style scoped>
.content {
  flex-grow: 1; /* Ensures content takes available space */
}

.add-to-cart-btn {
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #a1d0ff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.add-to-cart-btn:hover {
  background-color: #4682B4; /* Slightly darker blue on hover */
}
</style>
