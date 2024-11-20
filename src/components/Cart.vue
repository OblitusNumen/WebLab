<template>
  <div class="cartOverlay">
    <div class="cartContainer">
      <h2>Корзина</h2>
      <!-- Replace with your cart items here -->
      <p v-if="cart.contents == null || cart.contents.length === 0">Ваша корзина пуста</p>
      <div v-else class="grid">
        <CartCard v-for="(el) in cart.contents" :obj="el"/>
      </div>
      <button @click="closeCart">Закрыть</button>
    </div>
  </div>
</template>
<script setup>
import {inject, onMounted, ref} from 'vue';
import {request} from "@/utils/fetch.js";
import CartCard from "@/components/CartCard.vue";

const cart = ref(null)

// Inject the headerRef provided by App.vue
const headerRef = inject('headerRef');

onMounted(async () => {
  cart.value = await request("/catalog/cart", 'GET');
})

function closeCart() {
  // Wait until the headerRef is fully available and the Header component is mounted
  if (headerRef && headerRef.value) {
    // Ensure that `headerRef.value.toLoginName` is defined
    if (typeof headerRef.value.toggleCartView === 'function') {
      headerRef.value.toggleCartView(); // Call the method from Header
    } else {
      console.error('toLoginName is not a function on the Header component');
    }
  } else {
    console.error('headerRef is not available');
  }
}

const updateCart = async () => {
  cart.value = await request("/catalog/cart", 'GET');
}
</script>
<style scoped>

.cartOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.cartContainer {
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.cartContainer button {
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #a1d0ff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

</style>