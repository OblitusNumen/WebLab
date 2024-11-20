<template>
  <div class="cartOverlay">
    <div class="cartContainer">
      <h2>Корзина</h2>
        <!-- Replace with your cart items here -->
        <p v-if="cart == null || cart.contents == null || cart.contents.length === 0">Ваша корзина пуста</p>
        <div v-else class="cartContent">
        <div class="grid" :key="contentKey">
          <CartCard v-for="(el) in cart.contents" :obj="el" :discount="cart.discount"/>
        </div>
          <div class="promo" v-if="!cart.discount">
            <input  id="email" v-model="promo"/>
            <button @click="apply">Применить</button>
          </div>
        <div v-if="cart.discount">Сумма: <s>{{ sum }}</s> {{ discountSum }} Руб.</div>
        <div v-else class="price">Сумма: {{ sum }} Руб.</div>
      </div>
      <!-- Keep the button in a fixed footer -->
      <div class="cartFooter">
        <button @click="closeCart">Закрыть</button>
      </div>
    </div>
  </div>
</template>


<script setup>
import {inject, onMounted, ref} from 'vue';
import {request} from "@/utils/fetch.js";
import CartCard from "@/components/CartCard.vue";

const cart = ref(null)
const promo = ref('')

// Inject the headerRef provided by App.vue
const headerRef = inject('headerRef');

// Inject the headerRef provided by App.vue
const contentKey = ref(false);

const discountSum = ref(0);
const sum = ref(0);

onMounted(async () => {
  await updateCart()
})

const countPrice = async (withDiscount) => {
  let sum = 0;
  const catalog = await request("/catalog", "GET")
  cart.value.contents.forEach(c => {
    // Ensure el.price and el.discount are valid numbers
    const el = catalog.find(a => a.id === c.id)
    const price = parseFloat(el.price) * c.count;
    const discount = parseFloat(el.discount);

    // Only perform the calculation if both price and discount are valid numbers
    if (!isNaN(price) && !isNaN(discount)) {
      sum += price * (withDiscount ? discount / 100 : 1);
      console.log(sum)
    } else {
      console.warn(`Invalid data in cart item:`, el);
    }
  });
  return sum.toFixed(2);
}

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

const apply = async () => {
  if (promo.value === 'PROMO') {
    cart.value.discount = true;
    await request("/catalog/updcart", 'POST', cart.value);
  }
}

const updateCart = async () => {
  cart.value = await request("/catalog/cart", 'GET');
  contentKey.value = !contentKey.value
  discountSum.value = await countPrice(true)
  sum.value = await countPrice(false)
}

defineExpose({
  updateCart
})
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
  display: flex;
  flex-direction: column; /* Organize content vertically */
  width: 80%; /* Adjust as needed */
  max-height: 70%; /* Limit height to make space for scrolling */
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.cartContent {
  overflow-y: auto; /* Enable vertical scrolling */
  flex-grow: 1; /* Allow this section to take up remaining space */
  margin-bottom: 16px; /* Space before the footer */
}

.cartFooter {
  display: flex;
  justify-content: center; /* Center-align the button */
}

.cartFooter button, .cartContent button {
  margin-top: 0;
  padding: 8px 16px;
  background-color: #a1d0ff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.promo * {
  padding: 10px;
  margin: 20px;
}
</style>