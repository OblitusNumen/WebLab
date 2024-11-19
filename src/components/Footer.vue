<template>
  <footer class="footer">
    <p class="footer">&copy; 2024 Фаренгейт. Все права защищены.</p>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  z-index: 1000; /* Make sure the footer is on top of other elements */
  border-top: 2px solid #bbbbbb;
  position: fixed; /* Fix the footer at the bottom */
  bottom: 0; /* Align to the bottom of the viewport */
  left: 0; /* Align to the left edge */
  right: 0; /* Align to the right edge */
  display: flex;
  width: 100%;
  background-color: #e4e4e4;
  padding: 4px; /* Example padding */
  justify-content: center; /* Center content horizontally */
}
</style>