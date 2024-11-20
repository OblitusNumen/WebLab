<template>
  <header width="100%">
    <div class="header">
      <img alt="Фаренгейт" height="44" src="/src/assets/img/logo.png">
      <div class="navBar">
        <button class="navButton" @click="goToHome">Главная</button>
        <button class="navButton" @click="goToCatalog">Каталог</button>
        <button class="navButton" @click="goToContacts">Контакты</button>
        <button class="navButton" @click="goToAbout">О нас</button>
        <button v-if="loginButtonName !== 'Вход'" class="cartButton" @click="toggleCartView">🛒 Корзина</button>
<!--        <button class="cartButton" @click="toggleCartView">🛒 Корзина</button>-->
        <button class="loginButton" @click="goToLogin">{{ loginButtonName }}</button>
      </div>
    </div>

    <!-- Cart View Overlay -->
    <Cart v-if="isCartVisible" ref="cartRef"/>
  </header>
</template>

<script setup>
import {useRouter} from 'vue-router';
import {onMounted, provide, ref} from 'vue';
import {getUserEmail} from "@/utils/utils.js";
import Cart from "@/components/Cart.vue";
import {request} from "@/utils/fetch.js";

const cartCount = ref(0)

const countCart = async () => {
  let sum = 0;
  const cart = await request("/catalog/cart", 'GET');
  cart.contents.forEach(e => sum += e.count)
  cartCount.value = sum
}

// Provide the headerRef so it can be injected into child components
const cartRef = ref(null);
provide('cartRef', cartRef);

// import { watch } from 'vue';
//
// watch(cartRef, (newValue) => {
//   console.log("--------------------------")
//   if (newValue) {
//     console.log("cartRef is initialized:", newValue);
//   } else {
//     console.log("cartRef is still null or undefined.");
//   }
//   console.log("--------------------------")
// });

const name = 'Header';

const router = useRouter();

const loginButtonName = ref('Вход');

// State for cart visibility
const isCartVisible = ref(false);

// Toggle cart visibility
const toggleCartView = async () => {
  console.log(isCartVisible.value)
  isCartVisible.value = !isCartVisible.value;
};

// Call toLoginName when the component is mounted
onMounted(() => {
  toLoginName(); // Call once immediately on mount
  countCart()
});

const toLoginName = async () => {
  const email = await getUserEmail()
  if (email != null) {
    loginButtonName.value = email; // Set the reactive value
  } else {
    loginButtonName.value = 'Вход'; // Set the default login text
  }
};

defineExpose({toLoginName, toggleCartView, countCart});

function goToHome() {
  router.push('/');
}

function goToCatalog() {
  router.push('/catalog');  // Ensure this matches your router configuration
}

function goToContacts() {
  router.push('/contacts');
}

function goToAbout() {
  router.push('/about');
}

function goToLogin() {
  router.push('/login');
}
</script>

<style scoped>
.navButton, .loginButton, .cartButton {
  margin: 10px;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
}

.loginButton {
  background-color: #a1d0ff;
  text-overflow: ellipsis;
}

.loginButton:hover, .navButton:hover, .cartButton:hover {
  transform: translate(0, 1px) scale(1.2);
  transition-duration: 300ms;
}

.header {
  z-index: 1000; /* Make sure the header is on top of other elements */
  border-bottom: 2px solid #bbbbbb;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #e4e4e4;
  padding: 10px;
  position: fixed;
}

.navBar {
  display: flex;
  align-items: center;
  margin-left: auto;
}
</style>