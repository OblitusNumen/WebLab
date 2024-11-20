<script setup>
import {defineProps, inject, onMounted, ref} from "vue";
import { request } from "@/utils/fetch.js";

// Define the props the component will accept
const props = defineProps({
  obj: {
    type: Object,
    required: true,
  },
  discount: {
    type: Boolean,
    required: true
  }
});

const good = ref(null);
const found = ref(false);
const itemCount = ref(props.obj.count || 1); // Default count, or from props

// Inject the cartRef provided by App.vue
const cartRef = inject('cartRef');

// Inject the headerRef provided by App.vue
const headerRef = inject('headerRef');

// import { watch } from 'vue';
//
// watch(cartRef, (newValue) => {
//   console.log("==================")
//   if (newValue) {
//     console.log("cartRef is initialized:", newValue);
//   } else {
//     console.log("cartRef is still null or undefined.");
//   }
//   console.log("==================")
// });

// Fetch the catalog and find the matching item
onMounted(async () => {
  const catalog = await request("/catalog", "GET");
  good.value = catalog.find((cartItem) => cartItem.id === props.obj.id);
  console.log(good.value);
  found.value = !!good.value;
});

// Increase item count
const increaseCount = async () => {
  itemCount.value += 1;
  await updateCart();
};

// Decrease item count (but not below 1)
const decreaseCount = async () => {
  if (itemCount.value > 1) {
    itemCount.value -= 1;
    await updateCart();
  }
};

// Remove item from cart
const removeFromCart = async () => {
  const cart = await request("/catalog/cart", 'GET');
  console.log("==================")
  console.log(cart.contents)
  console.log("==================")
      console.log(props.obj.id)
  cart.contents = cart.contents.filter(item => item.id !== props.obj.id)
  console.log(cart.contents)
  console.log("==================")
  await request("/catalog/updcart", 'POST', cart);
  await updateCartView()
};

// Update the cart on the server
const updateCart = async () => {
  const cart = await request("/catalog/cart", 'GET');
  const index = cart.contents.findIndex(item => item.id === props.obj.id);
  if (index !== -1) {
    cart.contents.splice(index, 1, {
      id: props.obj.id,
      count: itemCount.value
    });
  }
  await request("/catalog/updcart", 'POST', cart);
  await updateCartView()
};

const updateCartView = async () => {
// Wait until the headerRef is fully available and the Header component is mounted
  if (cartRef && cartRef.value) {
    // Ensure that `headerRef.value.toLoginName` is defined
    if (typeof cartRef.value.updateCart === 'function') {
      await cartRef.value.updateCart() // Call the method
    } else {
      console.error('toLoginName is not a function on the Header component');
    }
  } else {
    console.error('headerRef is not available');
  }
  await headerRef.value.countCart()
}
</script>

<template>
  <div class="box">
    <div v-if="found" class="found-wrapper">
      <img
          :draggable="false"
          :src="'/src/assets' + good.path_to_image"
          alt="Изображение товара"
          height="120"
          width="120"
      />
      <div class="content">
        <strong>{{ good.label }}</strong><br />
        <div v-if="discount"><s>{{ good.price }}</s> {{ good.price * good.discount /100 }} Руб.</div>
        <div v-else class="price">{{ good.price }} Руб.</div>
      </div>

      <!-- Controls and Remove Button at the Bottom -->
      <div class="bottom-section">
        <div class="controls">
          <button @click="decreaseCount" :disabled="itemCount === 1">-</button>
          <span class="count">{{ itemCount }}</span>
          <button @click="increaseCount" :disabled="itemCount === good.in_stock">+</button>
        </div>
        <button @click="removeFromCart" class="remove-button">Убрать из корзины</button>
      </div>
    </div>

    <div v-else class="content">
      <strong>Товар не найден</strong><br />
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  justify-content: flex-start; /* Start items at the top */
  align-items: center; /* Center horizontally */
  height: 100%; /* Ensure it takes the full available height */
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.found-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensures content stays spaced */
  height: 100%; /* Take all available height */
  width: 100%; /* Ensure it stretches the full width */
  align-items: center; /* Center items horizontally */
}

.content {
  text-align: center; /* Center text inside the content block */
  margin-bottom: 10px; /* Add space between content and controls */
}

.bottom-section {
  margin-top: auto; /* Push the controls and remove button to the bottom */
  display: flex;
  flex-direction: column; /* Stack controls and button vertically */
  align-items: center; /* Center horizontally */
}

.controls {
  display: flex;
  align-items: center; /* Vertically center items */
  justify-content: center; /* Horizontally center items */
  margin: 10px 0;
}

.controls button {
  background-color: #a1d0ff;
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 4px;
}

.controls button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.count {
  font-weight: bold;
  margin: 0 10px;
}

.remove-button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #a1d0ff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  width: 100%; /* Optional: makes the button span the full width */
}
</style>
