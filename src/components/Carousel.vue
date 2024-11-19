<template>
  <div class="carousel-container">
    <swiper
        :modules="[Navigation, Pagination]"
        :slides-per-view="1"
        :space-between="0"
        navigation
        pagination
    >
      <swiper-slide>
        <div class="box">
          <img height="120" src="/src/assets/img/trubifitingi.png" width="120" />
          Трубофиттинги
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          <img height="120" src="/src/assets/img/vodonagrev.png" width="120" />
          Водонагреватели
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          <img height="120" src="/src/assets/img/nasos.png" width="120" />
          Насосное оберудование
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          <img height="120" src="/src/assets/img/kotelnoe.png" width="120" />
          Котельное оберудование
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
</script>

<style>
.carousel-container {
  width: 100%;
  max-width: 600px;
  margin: auto;
  position: relative;
}

.box {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  border-radius: 10px;
  margin-bottom: 10px;
}

/* Customize navigation arrows */
.swiper-button-next,
.swiper-button-prev {
  color: #333; /* Color for arrows */
  font-size: 24px;
  width: 40px;
  height: 40px;
}

.swiper-button-next {
  right: 10px;
}

.swiper-button-prev {
  left: 10px;
}
</style>