<template>
  <div class="content">
    <h1 class="headings">Магазин сантехники Фаренгейт</h1>
    <b class="text">Компания «Фаренгейт» предлагает частным лицам и корпоративным клиентам широкий выбор отопительного оборудования, установок и комплектующих для систем водоснабжения, климатической техники, а так же сантехники и сопутствующих товаров. В продаже – изделия высокого качества известных российских и зарубежных брендов.
    </b>
    <div class="row">
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
    </div>
    <h2 class="headings">Ассортимент продукции</h2>
    В каталоге на сайте представлено оборудование и приспособления, сопутствующие детали для монтажа элементов систем водоснабжения и отопления, климатическая техника и сантехника. У нас вы можете заказать:
    <ul class="list">
      <li>радиаторы (стальные, алюминиевые, биметаллические) и конвекторы;</li>
      <li>котлы и газовые колонки, прочее оборудование для котельной;</li>
      <li>насосы и насосные станции;</li>
      <li>водонагреватели;</li>
      <li>расширительные баки;</li>
      <li>трубы и фитинги;</li>
      <li>комплектующие для монтажных работ (краны, клапаны, изоляцию);</li>
      <li>климатическую технику;</li>
      <li>сантехнику.</li>
    </ul>
    <h2 class="headings">Почему оборудование для систем отопления и водоснабжения стоит приобрести у нас</h2>
    <ol class="list">
      <li>Предлагаем исключительно оригинальную продукцию, сведения о гарантии представлены в карточке товара. Уточнить информацию можно у менеджера.</li>
      <li>В наличии – более 10 тысяч наименований товаров, в большинстве случаев мы готовы отправить выбранное оборудование, комплектующие в день заказа.</li>
      <li>Доставка по Москве и области осуществляется ежедневно, в другие регионы РФ отправляем заказы транспортными компаниями.</li>
    </ol>
    <h2 class="headings">Наши партнёры</h2>
    <div class="row">
      <a href="https://farengeit-online.ru/brands/ballu/"><img src="/src/assets/img/Ballu.png" height="71" width="200" alt="Ballu"/></a>
      <a href="https://farengeit-online.ru/brands/baxi/"><img src="/src/assets/img/baxi.jpg" height="62" width="200" alt="Baxi"/></a>
      <a href="https://farengeit-online.ru/brands/vaillant/"><img src="/src/assets/img/vaillant.png" height="52" width="200" alt="Vaillant"/></a>
      <a href="https://farengeit-online.ru/brands/evan/"><img src="/src/assets/img/evan.jpg" height="54" width="200"alt="Evan"/></a>
    </div>
    <table>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </table>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: 'Home',
  components: {Header}
}
</script>

<style scoped>
.content {
  padding: 0 50px 50px;
}
.list {
  padding-left: 50px;
}
</style>