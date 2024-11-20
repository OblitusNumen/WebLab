<script setup>
import {defineProps} from 'vue';

// Define the props the component will accept
const props = defineProps({
  obj: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="box">
    <img :draggable="false" :src="'/src/assets' + props.obj.path_to_image" alt="Изображение товара" height="120"
         width="120"/>
    {{ props.obj.id }}<br>
<!--    {{ props.obj.price }} Руб.-->
  </div>
</template>

<style scoped>

</style>