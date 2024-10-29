<template>
  <header width="100%">
    <div class="header">
      <img src="/src/assets/img/logo.png" alt="Фаренгейт" height="44">
      <div class="navBar">
        <button @click="goToHome" class="navButton">Главная</button>
        <button @click="goToCatalog" class="navButton">Каталог</button>
        <button @click="goToContacts" class="navButton">Контакты</button>
        <button @click="goToAbout" class="navButton">О нас</button>
        <button @click="goToLogin" class="loginButton">Вход</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

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
.navButton, .loginButton {
  margin: 10px;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
}

.loginButton {
  background-color: #a1d0ff;
}

.loginButton:hover, .navButton:hover {
  transform: translate(0, 1px) scale(1.2);
  transition-duration: 300ms;
}

.header {
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