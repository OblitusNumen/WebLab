<template>
  <header width="100%">
   <div class="header">
     <img src="/src/assets/img/logo.png" alt="Фаренгейт" height="44">
     <div class="navBar"><button @click="goToHome" class="navButton">Главная</button>
       <button @click="goToCatalog" class="navButton">Каталог</button>
       <button @click="goToContacts" class="navButton">Контакты</button>
       <button @click="goToAbout" class="navButton">О нас</button>
       <button @click="goToLogin" class="loginButton">Вход</button>
     </div>
   </div>


  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToHome() {
  router.push('/Home');
}

function goToCatalog() {
  router.push('/Catalog');
}

function goToContacts() {
  router.push('/Contacts');
}

function goToAbout() {
  router.push('/About');
}

function goToLogin() {
  router.push('/Login');
}
</script>

<style scoped>

.navButton, .loginButton {
  margin: 10px;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  /* Optional: Add common styles here */
}

.loginButton {
  background-color: #a1d0ff;
}

.loginButton:hover {
	transform: translate(0, 1px) scale(1.2);
	transition-duration: 300ms;
}

.navButton:hover {
	transform: translate(0, 1px) scale(1.2);
	transition-duration: 300ms;
}

.header {
  display: flex;
  justify-content: space-between; /* Space between logo and nav */
  width: 100%;
  background-color: #e4e4e4;
  padding: 10px;
}

.navBar {
  display: flex;
  align-items: center; /* Center buttons vertically */
  margin-left: auto; /* Push navBar to the right */
}
</style>