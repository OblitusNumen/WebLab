<template>
  <div class="form-container">
    <div v-if="isLogin" class="form-card">
      <h2>Вход</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="login-email">Email:</label>
          <input type="email" id="login-email" v-model="loginEmail" required />
        </div>
        <div class="form-group">
          <label for="login-password">Пароль:</label>
          <input type="password" id="login-password" v-model="loginPassword" required />
        </div>
        <button type="submit">Войти</button>
        <p @click="toggleForm" class="toggle-link">Регистрация</p>
      </form>
    </div>

    <div v-else class="form-card">
      <h2>Регистрация</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="register-email">Email:</label>
          <input type="email" id="register-email" v-model="registerEmail" required />
        </div>
        <div class="form-group">
          <label for="register-password">Пароль:</label>
          <input type="password" id="register-password" v-model="registerPassword" required />
        </div>
        <div class="form-group">
          <label for="confirm-password">Подтверждение пароля:</label>
          <input type="password" id="confirm-password" v-model="confirmPassword" required />
        </div>
        <button type="submit">Зарегистрироваться</button>
        <p @click="toggleForm" class="toggle-link">Вход</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
      loginEmail: '',
      loginPassword: '',
      registerEmail: '',
      registerPassword: '',
      confirmPassword: '',
    };
  },
  methods: {
    toggleForm() {
      this.isLogin = !this.isLogin;
    },
    handleLogin() {
      // Handle login logic here
      console.log('Logging in with:', this.loginEmail, this.loginPassword);
    },
    handleRegister() {
      // Handle registration logic here
      console.log('Registering with:', this.registerEmail, this.registerPassword);
    },
  },
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

.toggle-link {
  text-align: center;
  color: #007bff; /* Link color */
  cursor: pointer; /* Pointer cursor */
}
</style>