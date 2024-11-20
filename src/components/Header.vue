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
    <div v-if="isCartVisible">
      <Cart ref="cartRef"/>
      </div>
  </header>
</template>

<script setup>
import {useRouter} from 'vue-router';
import {onMounted, ref} from 'vue';
import {getUserEmail} from "@/utils/utils.js";
import Cart from "@/components/Cart.vue";

const name = 'Header';

const router = useRouter();

const loginButtonName = ref('Вход');

const cartRef = ref(null);

// State for cart visibility
const isCartVisible = ref(false);

// Toggle cart visibility
const toggleCartView = async () => {
  isCartVisible.value = !isCartVisible.value;
  await cartRef.value.updateCart()
};

// Call toLoginName when the component is mounted
onMounted(() => {
  toLoginName(); // Call once immediately on mount
});

const toLoginName = async () => {
  const email = await getUserEmail()
  if (email != null) {
    loginButtonName.value = email; // Set the reactive value
  } else {
    loginButtonName.value = 'Вход'; // Set the default login text
  }
};

const getCart = () => {
  console.log('cartRef.value')
  console.log(cartRef.value)
  return cartRef.value;
};
defineExpose({toLoginName, toggleCartView, getCart});

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