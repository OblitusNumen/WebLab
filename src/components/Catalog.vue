<script>
</script>

<template>
  <div class="body">
    <h1 class="headings">Ассортимент продукции</h1>
    <div class="input">
      <input class="search" type="search" placeholder="Поиск"/>
    </div>
    <div class="grid">
      <div class="box">
        <img src="/src/assets/img/trubifitingi.png" height="120" width="120"/>
        Трубофиттинги
      </div>
      <div class="box">
        <img src="/src/assets/img/vodonagrev.png" height="120" width="120"/>
        Водонагреватели
      </div>
      <div class="box">
        <img src="/src/assets/img/nasos.png" height="120" width="120"/>
        Насосное оберудование
      </div>
      <div class="box">
        <img src="/src/assets/img/kotelnoe.png" height="120" width="120"/>
        Котельное оберудование
      </div>
      <div class="box">
        <img src="/src/assets/img/radiator.png" height="120" width="120"/>
        Радиаторы
      </div>
      <div class="box">
        <img src="/src/assets/img/zapornaya.png" height="120" width="120"/>
        Запорная арматура
      </div>
      <div class="box">
        <img src="/src/assets/img/santehnika.png" height="120" width="120"/>
        Сантехника
      </div>
      <div class="box">
        <img src="/src/assets/img/termoreg.png" height="120" width="120"/>
        Терморегулирующая арматура
      </div>
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