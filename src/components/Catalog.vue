<script setup>
import Card from "@/components/Card.vue";
import {onMounted, ref} from "vue";
import {request} from "@/utils/fetch.js";

let catalog
const filtered = ref(null)
const searchQuery = ref('')

onMounted(async () => {
  try {
    catalog = await request("/catalog", "GET")
    filtered.value = catalog
  } catch {
  }
})

const search = async () => {
  filtered.value = catalog.filter(item =>
      item.label.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
}
</script>

<template>
  <div class="body">
    <h1 class="headings">Ассортимент продукции</h1>
    <div class="input">
      <input v-model="searchQuery" class="search" placeholder="Поиск" type="search" @input="search"/>
    </div>
    <div class="grid">
      <Card v-for="(el) in filtered" :obj="el"/>
    </div>
  </div>
</template>

<style scoped>
.input {
  display: flex; /* Enable flexbox */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

.search {
  font-size: 16px;
  padding: 10px;
  margin: 20px;
  width: 50%;
  height: 40px;
  border-radius: 10px;
}

.body {
  padding-right: 50px;
  padding-left: 50px;
}
</style>