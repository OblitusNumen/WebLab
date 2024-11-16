<template>
  <div class="form-container">
    <div v-if="email == null">
      <div v-if="isLogin" class="form-card">
        <h2>Вход</h2>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="login-email">Email:</label>
            <input id="login-email" v-model="loginData.email" required type="email"/>
          </div>
          <div class="form-group">
            <label for="login-password">Пароль:</label>
            <input id="login-password" v-model="loginData.password" required type="password"/>
          </div>
          <button type="submit">Войти</button>
          <p v-if="loginError !== ''" class="error">{{ loginError }}</p>
          <p class="toggle-link" @click="toggleForm">Регистрация</p>
        </form>
      </div>

      <div v-else class="form-card">
        <h2>Регистрация</h2>
        <form @submit.prevent="handleRegister">
          <div class="form-group">
            <label for="register-email">Email:</label>
            <input id="register-email" v-model="registerData.email" required type="email"/>
          </div>
          <div class="form-group">
            <label for="register-password">Пароль:</label>
            <input id="register-password" v-model="registerData.password" required type="password"/>
          </div>
          <div class="form-group">
            <label for="confirm-password">Подтверждение пароля:</label>
            <input id="confirm-password" v-model="registerData.password_confirm" required type="password"/>
          </div>
          <button type="submit">Зарегистрироваться</button>
          <p v-if="registerError !== ''" class="error">{{ registerError }}</p>
          <p class="toggle-link" @click="toggleForm">Вход</p>
        </form>
      </div>
    </div>
    <div v-else class="form-card">
      <h2>{{ email }}</h2>
      <form @submit.prevent="handleLogout">
        <button type="submit">Выход</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {request} from "@/utils/fetch.js";
import {getUserEmail} from "@/utils/utils.js";

// Reactive state
const isLogin = ref(true);

const email = ref(null);

const loginError = ref('');
const registerError = ref('');

const loginData = ref({
  email: '',
  password: ''
})

onMounted(async () => {
  await setupAuth();
});

async function setupAuth() {
  email.value = await getUserEmail()
  // await toLoginName()
}

const registerData = ref({
  email: '',
  password: '',
  password_confirm: ''
})

// Methods
const toggleForm = () => {
  isLogin.value = !isLogin.value;
};

const handleLogout = async () => {
  try {
    await request("/auth/logout", 'POST');
  } catch (error) {
  }
  await setupAuth()
};

const handleLogin = async () => {
  try {
    await request("/auth/login", 'POST', loginData.value);
    loginData.value = {
      email: '',
      password: ''
    }
  } catch (error) {
    loginError.value = error.detail
  }
  await setupAuth()
};

const handleRegister = async () => {
  try {
    await request("/auth/register", 'POST', registerData.value);
    registerData.value = {
      email: '',
      password: '',
      password_confirm: ''
    }
  } catch (error) {
    registerError.value = error.detail
  }
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full viewport height */
  /*background-color: #c2c2c2; /* Light background color */
}

.form-card {
  background: #dfdfdf;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px; /* Fixed width for form card */
}

h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%; /* Full width */
  padding: 10px;
  border: 1px solid #ccc; /* Border color */
  border-radius: 4px; /* Rounded corners */
}

button {
  width: 100%; /* Full width */
  padding: 10px;
  background-color: #007bff; /* Button color */
  color: white; /* Text color */
  //border: none;
  border-radius: 4px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor */
}

button:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

.error {
  text-align: center;
  color: #ff5f50; /* Link color */
}

.toggle-link {
  text-align: center;
  color: #007bff; /* Link color */
  cursor: pointer; /* Pointer cursor */
}
</style>