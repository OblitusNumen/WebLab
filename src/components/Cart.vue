<template>
  <div class="cartOverlay">
    <div class="cartContainer">
      <h2>Корзина</h2>
      <!-- Replace with your cart items here -->
      <p v-if="cart == null || cart.contents == null || cart.contents.length === 0">Ваша корзина пуста</p>
      <div v-else class="cartContent">
        <div :key="contentKey" class="grid">
          <CartCard v-for="(el) in cart.contents" :discount="cart.discount" :obj="el"/>
        </div>
        <div v-if="!cart.discount" class="promo">
          <input id="email" v-model="promo" placeholder="Введите промокод"/>
          <button @click="apply">Применить</button>
        </div>
        <div v-if="cart.discount">Сумма: <s>{{ sum }}</s> {{ discountSum }} Руб.</div>
        <div v-else class="price">Сумма: {{ sum }} Руб.</div>
        <div class="order">
          <button @click="order">Оформить заказ</button>
        </div>
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
    await headerRef.value.countCart()
  }
}

const updateCart = async () => {
  cart.value = await request("/catalog/cart", 'GET');
  contentKey.value = !contentKey.value
  discountSum.value = await countPrice(true)
  sum.value = await countPrice(false)
}

const order = async () => {
  await request("/catalog/order", 'POST', cart.value)
  await updateCart()
  await headerRef.value.countCart()
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

.cartFooter {
  display: flex;
  justify-content: center;
  position: absolute; /* Stick it to the bottom of the container */
  bottom: 0;
  left: 0;
  width: 100%; /* Stretch across the container */
  background-color: #fff; /* Ensure it matches the container background */
  padding: 16px 0; /* Add padding for better appearance */
}

.cartContainer {
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative; /* Enable positioning of child elements */
}

.cartContent {
  overflow-y: auto;
  flex-grow: 1;
  margin-bottom: 16px; /* Ensure space above the footer */
}

.cartFooter button, .cartContent button {
  margin-top: 0;
  padding: 8px 16px;
  background-color: #a1d0ff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  text-overflow: ellipsis;
}

.promo * {
  padding: 10px;
  margin: 15px;
}

.order * {
  padding: 10px;
  margin: 30px;
}
</style>