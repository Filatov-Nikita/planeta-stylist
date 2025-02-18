<template>
  <section id="partners" class="section-partners">
    <div class="wrapper">
      <h2 class="h2 h2--primary section-partners__title">Партнеры</h2>
      <Swiper
        class="slider slider1"
        :modules="[ Autoplay ]"
        loop
        :autoplay="{
          delay: 1000,
          disableOnInteraction: false,
          reverseDirection: true,
        }"
        slidesPerView="2"
        :speed="3000"
        :spaceBetween="10"
        :breakpoints="{
          521: {
            spaceBetween: 20,
            slidesPerView: 3,
          },
          1091: {
            spaceBetween: 20,
            slidesPerView: 4,
          },
          1700: {
            slidesPerView: 5,
          }
        }"
      >
        <SwiperSlide
          class="slide"
          v-for="item in items1"
        >
          <img class="image" width="285" height="94" :src="item" loading="lazy" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        class="slider"
        :modules="[ Autoplay ]"
        loop
        :autoplay="{
          delay: 1000,
          disableOnInteraction: false,
          reverseDirection: false,
        }"
        slidesPerView="2"
        :speed="3000"
        :spaceBetween="20"
        :breakpoints="{
          521: {
            slidesPerView: 3,
          },
          1091: {
            slidesPerView: 4,
          },
          1700: {
            slidesPerView: 5,
          }
        }"
      >
        <SwiperSlide
          class="slide"
          v-for="item in items2"
        >
          <img class="image" width="285" height="94" :src="item" loading="lazy" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
  import { Autoplay } from 'swiper/modules';

  const items1 = [
    '/images/partners/row1/1_brusnika.svg?v=1',
    '/images/partners/row1/2_ICHE.svg?v=1',
    '/images/partners/row1/3_m.reason.svg?v=1',
    '/images/partners/row1/4_glvr.svg?v=1',
    '/images/partners/row1/5_alexander bogdanov.svg?v=1',
    '/images/partners/row1/6_kira plastinina.svg?v=1',
    '/images/partners/row1/7_стокманн.svg?v=1',
    '/images/partners/row1/8_armani exchange.svg?v=1',
  ];

  const items2 = [
    '/images/partners/row2/1_guess.svg?v=1',
    '/images/partners/row2/2_benetton.svg?v=1',
    '/images/partners/row2/3_mollis.svg?v=1',
    '/images/partners/row2/4_tom tailor.svg?v=1',
    '/images/partners/row2/5_Vassa&CO.svg?v=1',
    '/images/partners/row2/6_индустрия.svg?v=1',
    '/images/partners/row2/7_charuel.svg?v=1',
    '/images/partners/row2/8_glassman.svg?v=1',
  ];
</script>

<style scoped lang="scss">
  .section-partners {
    padding-top: 180px;

    @include lg {
      padding-top: 120px;
    }

    @include md {
      padding-top: 100px;
    }

    @include sm {
      padding-top: 60px;
    }

    &__title {
      margin-bottom: 60px;

      @include sm {
        margin-bottom: 30px;
      }
    }
  }

  .slider1 {
    margin-bottom: 40px;

    @include sm {
      margin-bottom: 20px;
    }
  }
</style>
